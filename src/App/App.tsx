import React, { useEffect, useRef } from "react";
import MainBody from "../components/Organisms/MainBody/MainBody";
import ErrorBoundary from "../components/Molecules/ErrorBoundary/ErrorBoundary";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import "./App.css";
import Loader from "../components/Atoms/Loader/Loader";
import { useTheme } from "../context/ThemeContext";
import { useGlobalContext } from "../context/GlobalContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ToggleButton from "../components/Atoms/ToggleButton/ToggleButton";
import LeftPane from "../components/Organisms/LeftPane/LeftPane";

export const App = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { isProfileDataLoaded, leftPaneData, currentSectionInView } =
    useGlobalContext();
  const AppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(currentSectionInView);
  }, [currentSectionInView]);

  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ErrorBoundary>
      {!isProfileDataLoaded ? (
        <Loader />
      ) : (
        <>
          <PageScrollProgressBar
            container={AppRef.current}
            bgColor="transparent"
          />
          <div
            className={"App row no-gutters fade show justify-content-center"}
            ref={AppRef}
          >
            <ToggleButton onClick={toDarkMode} value={darkMode}></ToggleButton>
            <div className="darkModeWrapper">
              <div className="darkModeButton" onClick={() => toDarkMode()}>
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={toDarkMode}
                  size={30}
                  sunColor="#FFCC66"
                />
              </div>
            </div>
            {leftPaneData && <LeftPane />}
            <MainBody />
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default App;
