import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import myImage from "../../assets/AnoopJadhav.png";
import "./Summary.css";
import Loader from '../Loader/Loader'

export default ({ dbData }) => {

  const [imageLoading, setImageLoading] = useState(false);

  function handleImageLoaded() {
    setImageLoading(true)
  }

  function handleImageErrored() {
    setImageLoading(false)
  }

  return (
    <>
      {!imageLoading && <Loader />}
      <div
        className={
          "show-on-scroll col-md-7 page-1 text-center "
        }
      >
        <div className="mainlogo-wrapper">
          <img
            src={myImage}
            className={`mainlogo ${imageLoading && 'loaded'}`}
            alt="mi Baburao"
            loading="eager"
            onLoad={handleImageLoaded}
            onError={handleImageErrored}
          />
        </div>

        <div className="h1 bold main-title grey-1">
          {dbData.overview.name}
        </div>
        <div className="h4 uppercase letterspacing-1 red bold">
          {dbData.overview.title}
        </div>
        <div className="body-text summary-text">
          {dbData.overview.summary}
        </div>
        <div className="default-text red scroll-text thin">
          Scroll to Know more
        </div>
      </div>
    </>
  );
}
