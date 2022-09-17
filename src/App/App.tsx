import React, { useRef } from "react";
import MainBody from "../components/Organisms/MainBody/MainBody";
import ErrorBoundary from "../components/Molecules/ErrorBoundary/ErrorBoundary";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import "./App.scss";
import Loader from "../components/Atoms/Loader/Loader";
import { useTheme } from "../context/ThemeContext";
import { useGlobalContext } from "../context/GlobalContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import LeftPane from "../components/Organisms/LeftPane/LeftPane";

export const App = () => {
  const { darkMode, setDarkMode, isMobile } = useTheme();
  const { isProfileDataLoaded, leftPaneData } = useGlobalContext();
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
          <PageScrollProgressBar
            container={AppRef.current}
            bgColor="transparent"
          />
          <div
            className={"App row no-gutters fade show justify-content-center"}
            ref={AppRef}
          >
            <div className="darkModeWrapper" title="Toggle dark mode">
              <DarkModeSwitch
                checked={darkMode}
                onChange={toDarkMode}
                size={30}
                sunColor="#FFCC66"
              />
            </div>
            {!isMobile && leftPaneData && <LeftPane />}
            <MainBody />
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default App;
