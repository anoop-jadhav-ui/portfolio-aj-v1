import React from "react";

import LeftPane from "../LeftPane/LeftPane";
import MainBody from "../MainBody/MainBody";
import Portfolio from "../Portfolio/Portfolio";
import leftPaneData from "../LeftPane/leftPaneData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import KnowMoreButton from "../../assets/arrow-icon.svg";

import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import firebase from "../firebaseConfig.js";

// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
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

  var crossButtonPortfolio = document.querySelector(".close-button");
  if (crossButtonPortfolio != undefined) {
    if (isElementInViewport(crossButtonPortfolio)) {
      document.querySelector(".skip-button").classList.add("hide");
    } else {
      document.querySelector(".skip-button").classList.remove("hide");
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
function PortfolioWrapper(props) {
  return (
    <div className="portfolio row no-gutters">
      {props.showLoader && <Loader />}
      {!(
        Object.keys(props.imageData).length === 0 &&
        props.imageData.constructor === Object
      ) ? (
        <Portfolio
          currentStep={props.currentStep}
          changeStep={props.changeStep}
          toggleLoader={props.toggleLoader}
          dbData={props.dbData}
          imageData={props.imageData}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
function MainbodyWrapper(props) {
  return (
    <div className="App summary row no-gutters fade show">
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
      <Link to="/" className="know-more-button back-to-work-button mt-4">
        <img src={KnowMoreButton} alt="Mobile back to work button" />
        <span className="red pl-2">Back to Work</span>{" "}
      </Link>

      {props.showLoader && <Loader />}
      <LeftPane
        imageData={props.imageData}
        toggleLoader={props.toggleLoader}
        currentStep={props.currentStep}
        changeStep={props.changeStep}
        leftPaneItems={props.leftPaneItems}
        fetchHeaderPositions={props.fetchHeaderPositions}
        toggleLoader={props.toggleLoader}
      ></LeftPane>
      <MainBody
        imageData={props.imageData}
        toggleLoader={props.toggleLoader}
        currentStep={props.currentStep}
        changeStep={props.changeStep}
        changeCurrentStepBasedOnScrollCalculation={
          props.changeCurrentStepBasedOnScrollCalculation
        }
        toggleLoader={props.toggleLoader}
        dbData={props.dbData}
      ></MainBody>
    </div>
  );
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
    dbData: {},
    imageData: {
      portfolio: [],
      thumbnail: []
    }
  };

  componentDidMount() {
    /*GET DATA FROM FIREBASE*/
    const rootRef = firebase
      .database()
      .ref()
      .child("/");

    rootRef.on("value", snapshot => {
      this.setState(() => {
        return {
          dbData: snapshot.val()
        };
      });
    });

    /*GET IMAGES FROM FIREBASE*/
    const storageRef = firebase.storage().ref();

    let imageDataTemp = {
      portfolio: [],
      thumbnail: [],
      assets: []
    };
    var listRef = storageRef.child("portfolio-images/thumbnails");
    listRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          imageDataTemp.thumbnail.push({
            fileName: itemRef.name,
            fileUrl: itemRef.getDownloadURL()
          });
        });
        this.setState(() => {
          return {
            imageData: imageDataTemp
          };
        });
        // console.log(this.state.imageData);
      })
      .catch(function(error) {
        console.log("error  while downloading images");
      });
    var listRef = storageRef.child("portfolio-images/portfolio");
    listRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          imageDataTemp.portfolio.push({
            fileName: itemRef.name,
            fileUrl: itemRef.getDownloadURL()
          });
        });
        this.setState(() => {
          return {
            imageData: imageDataTemp
          };
        });
        // console.log(this.state.imageData);
      })
      .catch(function(error) {
        console.log("error  while downloading images");
      });
    var listRef = storageRef.child("portfolio-images/assets");
    listRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          imageDataTemp.assets.push({
            fileName: itemRef.name,
            fileUrl: itemRef.getDownloadURL()
          });
        });
        this.setState(() => {
          // console.log(this.state.imageData);
          return {
            imageData: imageDataTemp
          };
        });
        // sconsole.log(this.state.imageData);
      })
      .catch(function(error) {
        console.log("error  while downloading images");
      });
  }
  toggleLoader = toggleValue => {
    if (toggleValue == undefined || toggleValue == null) {
      this.setState(prevState => {
        return {
          showLoader: !prevState.showLoader
        };
      });
    } else {
      this.setState(() => {
        return {
          showLoader: toggleValue
        };
      });
    }
  };
  fetchHeaderPositions = () => {
    var leftPaneItemsWithHeaderPos = this.state.leftPaneItems;
    leftPaneItemsWithHeaderPos.forEach(function(item) {
      var element = document.getElementsByClassName(item.class)[0];
      if (element) {
        var rect = element.getBoundingClientRect();
        item.headerPos = rect.top;
      }
    });
    this.setState(() => {
      return {
        leftPaneItems: leftPaneItemsWithHeaderPos
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
        function(item) {
          if (item.headerPos - 100 < scrollTop) {
            // console.log(scrollTop + '------------' + item.headerPos);
            this.setState(() => {
              return {
                currentStep: item.key,
                scrollPos: scrollTop
              };
            });
          }
        }.bind(this)
      );
    }
  };
  changeStep = (newStep, event) => {
    this.setState(() => {
      return {
        currentStep: newStep,
        mainPage: true
      };
    });
    //scroll to element logic
    event.preventDefault();
    var leftPaneItemClass = this.state.leftPaneItems[newStep].class;
    var ele = document.getElementsByClassName(leftPaneItemClass);
    if (ele[0])
      ele[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  };

  render() {
    return !(
      Object.keys(this.state.dbData).length === 0 &&
      this.state.dbData.constructor === Object
    ) ? (
      <Router>
        <Route
          path="/"
          exact
          render={props => (
            <PortfolioWrapper
              {...props}
              currentStep={this.state.currentStep}
              changeStep={this.changeStep}
              showPortfolio={this.state.showPortfolio}
              showLoader={this.state.showLoader}
              toggleLoader={this.toggleLoader}
              dbData={this.state.dbData}
              imageData={this.state.imageData}
            />
          )}
        />
        <Route
          path="/profile"
          render={props => (
            <MainbodyWrapper
              {...props}
              imageData={this.state.imageData}
              dbData={this.state.dbData}
              currentStep={this.state.currentStep}
              changeStep={this.changeStep}
              changeCurrentStepBasedOnScrollCalculation={
                this.changeCurrentStepBasedOnScrollCalculation
              }
              mainPage={this.state.mainPage}
              leftPaneItems={this.state.leftPaneItems}
              scrollPos={this.state.scrollPos}
              fetchHeaderPositions={this.fetchHeaderPositions}
              showLoader={this.state.showLoader}
              toggleLoader={this.toggleLoader}
            />
          )}
        />
      </Router>
    ) : (
      <Loader />
    );
  }
}

export default App;
