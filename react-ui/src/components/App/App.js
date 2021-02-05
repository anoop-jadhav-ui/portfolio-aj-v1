import React, { useEffect, useState } from "react";

import LeftPane from "../LeftPane/LeftPane";
import MainBody from "../MainBody/MainBody";
import Portfolio from "../Portfolio/Portfolio";
import leftPaneData from "../LeftPane/leftPaneData";
import ToggleButton from "../ToggleButton/ToggleButton"
import ContactIcons from '../ContactIcons/ContactIcons'
// import BgAnimations from '../BgAnimations/BgAnimations'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import "./App.css";
import KnowMoreButton from "../../assets/arrow-icon.svg";

import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import firebase from "../firebaseConfig.js";

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

  // var crossButtonPortfolio = document.querySelector(".close-button");
  // if (crossButtonPortfolio != undefined) {
  //   if (isElementInViewport(crossButtonPortfolio)) {
  //     document.querySelector(".skip-button").classList.add("hide");
  //   } else {
  //     document.querySelector(".skip-button").classList.remove("hide");
  //   }
  // }

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

// Portfolio wrapper component
function PortfolioWrapper(props) {
  return (
    <div className="portfolio row no-gutters">
      {props.showLoader && <Loader />}
      {
        /*!(
         Object.keys(props.imageData).length === 0 &&
         props.imageData.constructor === Object
       
      )*/
        props.imageData != undefined &&
          Object.keys(props.imageData.portfolio).length > 0 ? (
            <Portfolio
              currentStep={props.currentStep}
              changeStep={props.changeStep}
              toggleLoader={props.toggleLoader}
              dbData={props.dbData}
              imageData={props.imageData}
              setClickedItem={props.setClickedItem}
            />
          ) : (
            <Loader />
          )
      }
    </div>
  );
}
// Mainbody wrapper component
function MainbodyWrapper(props) {
  let [darkMode, setDarkMode] = useState(false);
  function toDarkMode() {
    if (!darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }

  }
  return (
    <div className={`App summary row no-gutters fade show ${darkMode ? 'darkmode' : ''}`}>
      {/* <Link to="/" className="know-more-button back-to-work-button mt-4">
        <img src={KnowMoreButton} alt="Mobile back to work button" />
        <span className="red pl-2">Back to Work</span>{" "}
      </Link> */}
      {/* <BgAnimations/> */}
      <div className="darkModeWrapper">
        <div className="darkModeButton" onClick={toDarkMode} >
          <div className={ `light ${ !darkMode && 'bold'}`}>Light</div>
          <ToggleButton onClick={toDarkMode} value={darkMode} />
          <div className={ `dark ${ darkMode && 'bold'}`}>Dark</div>
        </div>
      </div>
      
      <ContactIcons data={props.dbData} className="rightpane"/>

      

      {props.showLoader && <Loader />}
      <LeftPane
        imageData={props.imageData}
        toggleLoader={props.toggleLoader}
        currentStep={props.currentStep}
        changeStep={props.changeStep}
        leftPaneItems={props.leftPaneItems}
        fetchHeaderPositions={props.fetchHeaderPositions}
        toggleLoader={props.toggleLoader}
        darkMode={darkMode}
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
        darkMode={darkMode}
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
      thumbnail: [],
    },
    menuClickedItem: "",
  };

  setClickedItem = (clickedItem, event) => {
    this.setState(() => {
      return {
        menuClickedItem: clickedItem,
      };
    });
    // console.log(this.state.menuClickedItem);

    if (clickedItem == "Contacts") {
      setTimeout(() => {
        this.changeStep(7, event, false);
      }, 300);
    } else {
      setTimeout(() => {
        this.changeStep(1, event, false);
      }, 100);
    }
  };

  componentDidMount() {
    this.toggleLoader(true);

    /*GET DATA FROM FIREBASE*/
    const rootRef = firebase.database().ref().child("/");

    rootRef.on("value", (snapshot) => {
      this.setState(() => {
        return {
          dbData: snapshot.val(),
        };
      });
      this.toggleLoader(false);
    });

  }

  getDataFromFirebaseStorage(storageRef) {
    let imageDataTemp = {
      portfolio: [],
      thumbnail: [],
      assets: [],
    };
    //set asset image data
    var listRef = storageRef.child("portfolio-images/assets");
    listRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          imageDataTemp.assets.push({
            fileName: itemRef.name,
            fileUrl: itemRef.getDownloadURL(),
          });
        });

        //Set thumbnail images
        var listRef = storageRef.child("portfolio-images/thumbnails");
        listRef.listAll().then((res) => {
          res.items.forEach((itemRef) => {
            imageDataTemp.thumbnail.push({
              fileName: itemRef.name,
              fileUrl: itemRef.getDownloadURL(),
            });
          });

          //sort array based on the name
          imageDataTemp.thumbnail.sort((a, b) => {
            var indexA = parseInt(a.fileName.substring(9));
            var indexB = parseInt(b.fileName.substring(9));
            return indexA - indexB;
          });
          var listRef = storageRef.child("portfolio-images/portfolio");
          listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
              imageDataTemp.portfolio.push({
                fileName: itemRef.name,
                fileUrl: itemRef.getDownloadURL(),
              });
            });

            //sort array based on the name
            imageDataTemp.portfolio.sort((a, b) => {
              var indexA = parseInt(a.fileName.substring(10));
              var indexB = parseInt(b.fileName.substring(10));
              return indexA - indexB;
            });

            this.setState(() => {
              return {
                imageData: imageDataTemp,
              };
            });
            this.toggleLoader(false);
          });
        });
      })
      .catch(function (error) {
        console.log("error  while downloading images");
      });
  }

  toggleLoader = (toggleValue) => {
    if (toggleValue == undefined || toggleValue == null) {
      this.setState((prevState) => {
        return {
          showLoader: !prevState.showLoader,
        };
      });
    } else {
      this.setState(() => {
        return {
          showLoader: toggleValue,
        };
      });
    }
  };

  fetchHeaderPositions = () => {
    var leftPaneItemsWithHeaderPos = this.state.leftPaneItems;
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
        currentStep: newStep,
        mainPage: true,
      };
    });
    //scroll to element logic
    if (skip != false) event.preventDefault();
    var leftPaneItemClass = this.state.leftPaneItems[newStep].class;
    var ele = document.getElementsByClassName(leftPaneItemClass);
    if (ele[0])
      ele[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
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
            render={(props) => (
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
