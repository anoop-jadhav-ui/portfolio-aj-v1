import React, { useRef, useState } from "react";
import LeftPane from "../LeftPane/LeftPane";
import MainBody from "../MainBody/MainBody";
import ToggleButton from "../ToggleButton/ToggleButton";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "./App.css";
import Loader from "../Loader/Loader";
import { useTheme } from "../../context/ThemeContext";
import { useGlobalContext } from "../../context/GlobalContext";
import TopScrollBar from "../TopScrollBar/TopScrollBar";

export const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { darkMode, setDarkMode } = useTheme();
  const { isProfileDataLoaded, profileData, leftPaneData } = useGlobalContext();
  const AppRef = useRef<HTMLDivElement>(null);
  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ErrorBoundary>
      {!isProfileDataLoaded ? (
        <Loader />
      ) : (
        <>
          <TopScrollBar AppRef={AppRef} />
          <div className={"App summary row no-gutters fade show"} ref={AppRef}>
            <div className="darkModeWrapper">
              <div className="darkModeButton" onClick={() => toDarkMode()}>
                <ToggleButton
                  onClick={() => toDarkMode()}
                  value={darkMode}
                  trueLabel="Dark"
                  falseLabel="Light"
                />
              </div>
            </div>
            {/* {leftPaneData && (*/}
            {/*  <LeftPane*/}
            {/*    toggleLoader={isProfileDataLoaded}*/}
            {/*    currentStep={currentStep}*/}
            {/*    leftPaneItems={leftPaneData}*/}
            {/*    darkMode={darkMode}*/}
            {/*    dbData={profileData}*/}
            {/*  ></LeftPane>*/}
            {/* )}*/}
            <MainBody />
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default App;
