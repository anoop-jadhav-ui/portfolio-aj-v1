import React, { useRef } from "react";
import MainBody from "../components/Organisms/MainBody/MainBody";
import DarkModeToggle from "react-dark-mode-toggle";
import ErrorBoundary from "../components/Molecules/ErrorBoundary/ErrorBoundary";

import "./App.css";
import Loader from "../components/Atoms/Loader/Loader";
import { useTheme } from "../context/ThemeContext";
import { useGlobalContext } from "../context/GlobalContext";
import TopScrollBar from "../components/Atoms/TopScrollBar/TopScrollBar";

export const App = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { isProfileDataLoaded } = useGlobalContext();
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
          <div
            className={"App row no-gutters fade show justify-content-center"}
            ref={AppRef}
          >
            <div className="darkModeWrapper">
              <div className="darkModeButton" onClick={() => toDarkMode()}>
                <DarkModeToggle
                  onChange={toDarkMode}
                  checked={darkMode}
                  size={50}
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
