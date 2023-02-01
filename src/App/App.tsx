import "animate.css";
import React, { useRef } from "react";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Loader from "../components/Atoms/Loader/Loader";
import ErrorBoundary from "../components/Molecules/ErrorBoundary/ErrorBoundary";
import LeftPane from "../components/Organisms/LeftPane/LeftPane";
import MainBody from "../components/Organisms/MainBody/MainBody";
import Stars from "../components/Organisms/Stars/Stars";
import { useGlobalContext } from "../context/GlobalContext";
import { SectionInViewContextProvider } from "../context/SectionInViewContext";
import { useTheme } from "../context/ThemeContext";
import "./App.scss";

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
            color="var(--primary-color)"
          />
          <Stars />
          <div
            className={"App row no-gutters fade show justify-content-center"}
            ref={AppRef}
          >
            <div className="darkModeWrapper" title="Toggle dark mode">
              <DarkModeSwitch
                checked={darkMode}
                onChange={toDarkMode}
                size={30}
                sunColor="var(--primary-color)"
              />
            </div>

            {!isMobile && leftPaneData && (
              <SectionInViewContextProvider>
                <LeftPane />
              </SectionInViewContextProvider>
            )}

            <MainBody />
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};

export default App;
