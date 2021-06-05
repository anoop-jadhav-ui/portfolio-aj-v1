import { Component } from "react";
import { connect } from "react-redux"
import LeftPane from "../LeftPane/LeftPane";
import MainBody from "../MainBody/MainBody";
// import leftPaneData from "../LeftPane/leftPaneData";
import ToggleButton from "../ToggleButton/ToggleButton"
import ContactIcons from '../ContactIcons/ContactIcons'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import "./App.css";
import Loader from "../Loader/Loader";

// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementsToShow = document.getElementsByClassName("show-on-scroll");

function loop() {
  if (elementsToShow.length > 0) {
    for (var i = 0; i < elementsToShow.length; i++) {
      if (isElementInViewport(elementsToShow[i])) {
        elementsToShow[i].classList.add("is-visible");
      } else {
        elementsToShow[i].classList.remove("is-visible");
      }
    }
  }

  scroll(loop);
}

// Call the loop for the first times
loop();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
  );
}

class App extends Component {
  state = {
    darkMode: false,
    currentStep: 1,
    /*Variables used for transitions*/
    leftPaneItems: [],
    scrollPos: 0,
    menuClickedItem: ""
  };

  setClickedItem = (clickedItem) => {
    this.setState(() => {
      return {
        menuClickedItem: clickedItem,
      };
    });
  };

  componentDidMount() {
    this.props.toggleLoader(true);
    this.props.fetchData();
  }

  fetchHeaderPositions = () => {
    var leftPaneItemsWithHeaderPos = this.props.leftPaneData;
    leftPaneItemsWithHeaderPos.forEach(function (item) {
      var element = document.getElementsByClassName(item.class)[0];
      if (element) {
        var rect = element.getBoundingClientRect();
        item.headerPos = rect.top;
      }
    });
    this.setState(() => {
      return {
        leftPaneItems: leftPaneItemsWithHeaderPos,
      };
    });
  };

  changeCurrentStepBasedOnScrollCalculation = () => {
    //change step according to the threshhold '
    //this will run on scroll - so extensive method - use wisely
    var leftPaneItemsWithHeaderPos = this.state.leftPaneItems;
    var mainBody = document.getElementsByClassName("main-body")[0];

    if (mainBody) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      leftPaneItemsWithHeaderPos.forEach(
        function (item) {
          if (item.headerPos - 100 < scrollTop) {
            this.setState(() => {
              return {
                currentStep: item.key,
                scrollPos: scrollTop,
              };
            });
          }
        }.bind(this)
      );
    }
  };

  changeStep = (newStep, event, skip) => {
    this.setState(() => {
      return {
        currentStep: newStep
      };
    });
    //scroll to element logic
    if (!skip) event.preventDefault();
    var leftPaneItemClass = this.state.leftPaneItems[newStep].class;
    var ele = document.getElementsByClassName(leftPaneItemClass);
    if (ele[0])
      ele[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  toDarkMode() {
    if (!this.state.darkMode) {
      this.setState(() => {
        return {
          darkMode: true,
        };
      });

    } else {
      this.setState(() => {
        return {
          darkMode: false,
        };
      });
    }
  }

  render() {
    return (
      <ErrorBoundary>
        {
          this.props.dbData && Object.keys(this.props.dbData).length > 0 ?
            <div className={`App summary row no-gutters fade show ${this.state.darkMode ? 'darkmode' : ''}`}>
              <div className="darkModeWrapper">
                <div className="darkModeButton" onClick={() => this.toDarkMode()} >
                  <div className={`light ${!this.state.darkMode && 'bold'}`}>Light</div>
                  <ToggleButton onClick={() => this.toDarkMode()} value={this.state.darkMode} />
                  <div className={`dark ${this.state.darkMode && 'bold'}`}>Dark</div>
                </div>
              </div>
              <ContactIcons data={this.props.dbData} className="rightpane" />
              {this.props.leftPaneData && <LeftPane
                toggleLoader={this.props.toggleLoader}
                currentStep={this.state.currentStep}
                changeStep={this.changeStep}
                leftPaneItems={this.state.leftPaneItems}
                fetchHeaderPositions={this.fetchHeaderPositions}
                darkMode={this.state.darkMode}
              ></LeftPane>}
              <MainBody
                toggleLoader={this.props.toggleLoader}
                currentStep={this.state.currentStep}
                changeStep={this.changeStep}
                changeCurrentStepBasedOnScrollCalculation={this.changeCurrentStepBasedOnScrollCalculation}
                dbData={this.props.dbData}
                darkMode={this.state.darkMode}
                leftPaneData={this.props.leftPaneData}
              ></MainBody>
            </div> : <Loader />
        }
      </ErrorBoundary>
    )
  }
}


function mapStateToProps(state) {
  return {
    dbData: state.dr.data,
    leftPaneData: state.dr.leftPaneData,
    showLoader: state.dr.showLoader
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: 'FETCH_INIT_DATA' }),
    toggleLoader: (value) => dispatch({ type: 'TOGGLE_LOADER', data: value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
