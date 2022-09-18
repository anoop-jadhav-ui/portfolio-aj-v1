import React, { useMemo, useState } from "react";
import lightImage from "../../../assets/portfolio-app-img-light-min.png";
import darkImage from "../../../assets/portfolio-app-img-dark-min.png";
import "./Summary.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useTheme } from "../../../context/ThemeContext";
import moment from "moment/moment";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";
import DownloadCV from "../../Molecules/DownloadCV/DownloadCV";
import parse from "html-react-parser";
const Summary = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const { profileData } = useGlobalContext();
  const { darkMode } = useTheme();
  const { overview, experience } = profileData;

  const totalExperience = useMemo((): string => {
    try {
      return experience
        .map((exp) => {
          const fromDate = moment(exp.fromDate);
          const toDate =
            exp.toDate !== "Present" ? moment(exp.toDate) : moment();
          return moment(toDate).diff(fromDate, "year", true);
        })
        .reduce((a, b) => a + b)
        .toFixed(1);
    } catch (err) {
      return String(moment().year() - 2014);
    }
  }, [experience]);

  function handleImageLoaded() {
    setImageLoading(true);
  }
  function handleImageErrored() {
    console.error("Error while loading the profile image");
    setImageLoading(false);
  }

  return (
    <div className="summary-mobile">
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

      <div className="bold primary-color hello">{T.HELLO}</div>
      <div className="h1 bold main-title grey-1 typewriter">
        {overview.name}
      </div>
      <div className="body-text summary-text">
        {parse(
          overview.summary.replace("{totalYearsOfExperience}", totalExperience)
        )}
      </div>
      <DownloadCV />
    </div>
  );
};

export default SectionVisibilityHOC(Summary, constants.classNames.SUMMARY);
