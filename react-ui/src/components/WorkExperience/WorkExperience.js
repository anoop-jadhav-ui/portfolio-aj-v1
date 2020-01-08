import React from "react";
import "./WorkExperience.css";

import KnowMoreButton from "../../assets/arrow-icon.svg";

function WorkExperience(props) {
  return (
    <div
      className={
        "show-on-scroll col-md-7 page-1 text-left section work-experience " +
        props.class
      }
    >
      <div className="section-title grey4 h2 bold">Work Experience</div>

      <div className="subsection">
        {props.dbData.experience.map((ele, key) => {
          return <div key={key} className="subsection-data">
            <span className="h3 grey1 bold">{ele.name}</span>
            <div className="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
              <span className="pr-3">{ele.fromToDates}</span>
              <span className="dot"></span>
              <span className="pl-3">{ele.totalYears}</span>
            </div>
            <div className="mt-3 grey-1 body-text">{ele.summary}</div>
            {/*  <a className="know-more-button mt-4"><span className="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton" /></a> */}
          </div>
        })}
      </div>
    </div>
  );
}

export default WorkExperience;
