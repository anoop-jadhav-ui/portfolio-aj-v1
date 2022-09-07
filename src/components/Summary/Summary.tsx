import React, { useState } from "react";
import myImage from "../../assets/AnoopJadhav.png";
import "./Summary.css";
import Loader from "../Loader/Loader";
import { useGlobalContext } from "../../context/GlobalContext";

const Summary = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const { profileData } = useGlobalContext();
  const { overview } = profileData;
  function handleImageLoaded() {
    setImageLoading(true);
  }
  function handleImageErrored() {
    console.error("Error while loading the profile image");
    setImageLoading(false);
  }
  return (
    <>
      {!imageLoading && <Loader />}
      <div className="col-md-7 page-1 text-center ">
        <div className="mainlogo-wrapper">
          <img
            src={myImage}
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
        <div className="body-text summary-text">{overview.summary}</div>
        <div className="default-text red scroll-text thin">
          Scroll to Know more
        </div>
      </div>
    </>
  );
};

export default Summary;
