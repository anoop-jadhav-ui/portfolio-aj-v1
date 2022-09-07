import React from "react";
import "./Banner.css";
const Banner = (props) => {
  return (
    <div
      className={`default-text banner ${props.type}-banner mb-2`}
      data-testid="banner"
    >
      <div className="banner-text" data-testid="banner-text">
        {props.text}
      </div>
      <div
        className="cross"
        onClick={props.closeBanner}
        data-testid="bannerclosebutton"
      ></div>
    </div>
  );
};

export default Banner;
export { Banner };
