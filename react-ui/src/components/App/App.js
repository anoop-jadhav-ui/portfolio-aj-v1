import React from 'react'

import LeftPane from '../LeftPane/LeftPane'
import MainBody from '../MainBody/MainBody'
import Portfolio from '../Portfolio/Portfolio'
import leftPaneData from '../LeftPane/leftPaneData'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Loader from '../Loader/Loader'


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.getElementsByClassName('show-on-scroll');

function loop() {
  if (elementsToShow.length > 0)
    for (var i = 0; i < elementsToShow.length; i++) {
      if (isElementInViewport(elementsToShow[i])) {
        elementsToShow[i].classList.add('is-visible');
      } else {
        elementsToShow[i].classList.remove('is-visible');
      }
    }
  scroll(loop);
}
// Call the loop for the first times
loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  // if (typeof jQuery === "function" && el instanceof jQuery) {
  //   el = el[0];
  // }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
function PortfolioWrapper(props) {
  return <div className='portfolio row no-gutters'>
    {props.showLoader && <Loader />}
    <Portfolio currentStep={props.currentStep} changeStep={props.changeStep} toggleLoader={props.toggleLoader} />
  </div>
}
function MainbodyWrapper(props) {
  return <div className='App summary row no-gutters fade show'>
    {/* <div style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: '2' }}>
      <div style={{ color: 'red' }}>current step - {props.currentStep}</div>
      <div style={{ color: 'green' }}>scroll top - {props.scrollPos}</div>
      {
        props.leftPaneItems.map(item => {
          return item.class !== 'work' && <li key={item.key}>{item.class + '     -     ' + item.headerPos}</li>
        }
        )
      }
    </div> */}
    {props.showLoader && <Loader />}
    <LeftPane toggleLoader={props.toggleLoader} currentStep={props.currentStep} changeStep={props.changeStep} leftPaneItems={props.leftPaneItems} fetchHeaderPositions={props.fetchHeaderPositions} toggleLoader={props.toggleLoader}></LeftPane>
    <MainBody toggleLoader={props.toggleLoader} currentStep={props.currentStep} changeStep={props.changeStep} changeCurrentStepBasedOnScrollCalculation={props.changeCurrentStepBasedOnScrollCalculation} toggleLoader={props.toggleLoader}></MainBody>
  </div>
}


class App extends React.Component {

  state = {
    showLoader: false,
    currentStep: 1,
    /*Variables used for transitions*/
    showPortfolio: true,
    mainPage: false,
    leftPaneItems: leftPaneData,
    scrollPos: 0,
    fetchFlag: true,
  }

  toggleLoader = (toggleValue) => {
    if (toggleValue == undefined || toggleValue == null) {
      this.setState((prevState) => {
        return {
          showLoader: !prevState.showLoader
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          showLoader: toggleValue
        }
      })
    }

  }

  fetchHeaderPositions = () => {
    var leftPaneItemsWithHeaderPos = this.state.leftPaneItems;
    leftPaneItemsWithHeaderPos.forEach(function (item) {
      var element = document.getElementsByClassName(item.class)[0];
      if (element) {
        var rect = element.getBoundingClientRect();
        item.headerPos = rect.top;
      }
    })
    this.setState(() => {
      return {
        leftPaneItems: leftPaneItemsWithHeaderPos
      }
    })
  }
  changeCurrentStepBasedOnScrollCalculation = () => {
    //change step according to the threshhold '
    //this will run on scroll - so extensive method - use wisely
    var leftPaneItemsWithHeaderPos = this.state.leftPaneItems;
    var mainBody = document.getElementsByClassName('main-body')[0];

    if (mainBody) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      leftPaneItemsWithHeaderPos.forEach(function (item) {
        if (item.headerPos - 100 < scrollTop) {
          // console.log(scrollTop + '------------' + item.headerPos);
          this.setState(() => {
            return {
              currentStep: item.key,
              scrollPos: scrollTop
            }
          })
        }
      }.bind(this))
    }

  }
  changeStep = (newStep, event) => {

    this.setState(() => {
      return {
        currentStep: newStep,
        mainPage: true
      }
    })
    //scroll to element logic 
    event.preventDefault();
    var leftPaneItemClass = this.state.leftPaneItems[newStep].class
    var ele = document.getElementsByClassName(leftPaneItemClass)
    if (ele)
      ele[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    else
      alert('some error while scrolling ')
  }

  render() {
    return <Router>
      <Route path="/" exact render={(props) => <PortfolioWrapper {...props} currentStep={this.state.currentStep} changeStep={this.changeStep} showPortfolio={this.state.showPortfolio} showLoader={this.state.showLoader} toggleLoader={this.toggleLoader} />} />
      <Route path="/profile" render={(props) => <MainbodyWrapper {...props} currentStep={this.state.currentStep} changeStep={this.changeStep} changeCurrentStepBasedOnScrollCalculation={this.changeCurrentStepBasedOnScrollCalculation} mainPage={this.state.mainPage} leftPaneItems={this.state.leftPaneItems} scrollPos={this.state.scrollPos} fetchHeaderPositions={this.fetchHeaderPositions} showLoader={this.state.showLoader} toggleLoader={this.toggleLoader} />} />
    </Router>

  }

}

export default App;
