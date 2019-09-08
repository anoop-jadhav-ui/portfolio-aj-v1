import React from 'react'
import LeftPane from '../LeftPane/LeftPane'
import './App.css'
import MainBody from '../MainBody/MainBody'
import Portfolio from '../Portfolio/Portfolio'
import leftPaneData from '../LeftPane/leftPaneData'



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

class App extends React.Component {

  state = {
    currentStep: 0,
    /*Variables used for transitions*/
    showPortfolio: true,
    mainPage: false,
    leftPaneItems: leftPaneData,
    scrollPos: 0,
    fetchFlag: true

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
        if (item.headerPos < scrollTop && item.class !== 'work') {
          console.log(scrollTop + '------------' + item.headerPos);
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
    if (newStep !== 0) {
      //portfolio - fade out , summary - fade in
      this.setState(() => {
        return {
          showPortfolio: false
        }
      })
      setTimeout(() => {
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
          alert('scroll class not found')

        if (!this.state.showPortfolio && newStep == 1 && this.state.fetchFlag) {
          //function to fetch all the header positions
          this.fetchHeaderPositions();
          this.setState(() => {
            return {
              fetchFlag: false
            }
          })

        }

      }, 400)
    } else {
      //portfolio - fade In, Summary - fade out
      this.setState(() => {
        return {
          mainPage: false
        }
      })
      setTimeout(() => {
        this.setState(() => {
          return {
            showPortfolio: true,
            currentStep: newStep,
          }
        })
      }, 400)
    }
  }

  render() {
    return (
      <div>
        {
          this.state.currentStep === 0 ?
            <div className={this.state.showPortfolio ? 'portfolio row no-gutters fade show' : 'portfolio row no-gutters fadeOut hide'}>
              <Portfolio currentStep={this.state.currentStep} changeStep={this.changeStep} />
            </div>
            :
            <div className={this.state.mainPage ? 'App summary row no-gutters fade show' : 'App summary row no-gutters fadeOut hide'}>

              {/* Test Data starts*/}
              {/* <div style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: '2' }}>
                <div style={{ color: 'red' }}>change step - {this.state.currentStep}</div>
                <div style={{ color: 'green' }}>scroll top - {this.state.scrollPos}</div>
                {
                  this.state.leftPaneItems.map(item => {
                    return item.class !== 'work' && <li key={item.key}>{item.class + '     -     ' + item.headerPos}</li>
                  }
                  )
                }
              </div> */}
              {/* Test Data ends*/}˝
              <LeftPane currentStep={this.state.currentStep} changeStep={this.changeStep} leftPaneItems={this.state.leftPaneItems}></LeftPane>
              <MainBody currentStep={this.state.currentStep} changeStep={this.changeStep} changeCurrentStepBasedOnScrollCalculation={this.changeCurrentStepBasedOnScrollCalculation}></MainBody>
            </div>
        }
      </div>
    );
  }

}

export default App;
