import React, { useState, useEffect } from "react";
// import KnowMoreButton from "../../assets/arrow-icon.svg";
import BarGraph from "../BarGraph/BarGraph";
import "./Education.css";
// import leftPaneData from '../LeftPane/leftPaneData'

function Education(props) {
  let [sectionStep, setSectionStep] = useState();

  useEffect(() => {
    let key = 0;
    props.leftPaneData.forEach((ele) => {
      if (ele.label === "Education") {
        key = ele.key;
      }
    });
    setSectionStep(parseInt(key));
  }, [props.leftPaneData]);

  return (
    <div
      className={
        "show-on-scroll col-md-7 page-1 text-left section education " +
        props.class
      }
    >
      <div className="section-title grey4 h2 bold">Education</div>

      <div className="subsection">
        {props.dbData.education.map((ele, key) => {
          return (
            <div className="subsection-wrappers" key={key}>
              <div className="subsection-title uppercase body-text grey3 letterspacing-1 mt-2">
                {ele.type}
              </div>
              <div className="subsection-data">
                <span className="h3 grey1 bold">{ele.institute}</span>
                <span className="h3 grey3 light">, {ele.place}</span>
                <div className="education-bars">
                  <BarGraph
                    value={ele.percentage}
                    currentStep={props.currentStep}
                    sectionStep={sectionStep}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
