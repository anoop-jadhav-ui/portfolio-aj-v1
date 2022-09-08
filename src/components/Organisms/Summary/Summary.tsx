import React, { useMemo, useState } from "react";
import lightImage from "../../../assets/portfolio-app-img-light-min.png";
import darkImage from "../../../assets/portfolio-app-img-dark-min.png";
import "./Summary.css";
import Loader from "../../Atoms/Loader/Loader";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useTheme } from "../../../context/ThemeContext";
import moment from "moment/moment";

const Summary = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const { profileData } = useGlobalContext();
  const { darkMode } = useTheme();
  const { overview, experience } = profileData;

  const totalExperience = useMemo(() => {
    return experience
      .map((exp) => {
        const fromDate = moment(exp.fromDate);
        const toDate = exp.toDate !== "Present" ? moment(exp.toDate) : moment();
        return moment(toDate).diff(fromDate, "year", true);
      })
      .reduce((a, b) => a + b)
      .toFixed(1);
  }, [experience]);

  function handleImageLoaded() {
    setImageLoading(true);
  }
  function handleImageErrored() {
    console.error("Error while loading the profile image");
    setImageLoading(false);
  }
  return (
    <>
      <div className="col-md-7 page-1 text-center ">
        <div className="mainlogo-wrapper">
          <img
            src={darkMode ? darkImage : lightImage}
            className={`mainlogo ${imageLoading && "loaded"}`}
            alt="mi Baburao"
            loading="eager"
            onLoad={handleImageLoaded}
            onError={handleImageErrored}
          />
        </div>

        <div className="h1 bold main-title grey-1">{overview.name}</div>
        <div className="h4 uppercase letterspacing-1 red bold">
          {overview.title}
        </div>
        <div className="body-text summary-text">
          {overview.summary.replace(
            "{totalYearsOfExperience}",
            totalExperience
          )}
        </div>
        <div className="default-text red scroll-text thin">
          Scroll to Know more
        </div>
      </div>
    </>
  );
};

export default Summary;
