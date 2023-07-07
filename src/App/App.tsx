import "animate.css";
import React, { useRef } from "react";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import Copyright from "../components/Atoms/Copyright/Copyright";
import Loader from "../components/Atoms/Loader/Loader";
import ErrorBoundary from "../components/Molecules/ErrorBoundary/ErrorBoundary";
import LeftPane from "../components/Organisms/LeftPane/LeftPane";
import MainBody from "../components/Organisms/MainBody/MainBody";
import Stars from "../components/Organisms/Stars/Stars";
import { useProfileDataContext } from "../context/ProfileDataContext";
import { useTheme } from "../context/ThemeContext";
import T from "../translations/en_IN";
import "./App.scss";

export const App = () => {
  const { isMobile } = useTheme();
  const { isProfileDataLoaded, leftPaneData } = useProfileDataContext();
  const AppRef = useRef<HTMLDivElement>(null);

  return (
    <ErrorBoundary errorMessage={T.PAGE_LOAD_ERROR}>
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
            className="App row no-gutters fade show justify-content-center"
            ref={AppRef}
          >
            {!isMobile && leftPaneData && <LeftPane />}
            <MainBody />
          </div>
          <Copyright />
        </>
      )}
    </ErrorBoundary>
  );
};

export default App;
