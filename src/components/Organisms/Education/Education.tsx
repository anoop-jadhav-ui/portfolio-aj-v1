import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import "./Education.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../SectionInViewWrapper/SectionVisibilityHOC";

function Education() {
  const { profileData } = useGlobalContext();
  const { education } = profileData;
  return (
    <>
      <div className="section-title h2 bold">Education</div>
      <div className="subsection">
        {education.map((educationDetail, key) => {
          return (
            <div className="subsection-wrappers" key={key}>
              <div className="subsection-title uppercase body-text grey3 letterspacing-1 mt-2">
                {educationDetail.type}
              </div>
              <div className="subsection-data">
                <span className="h3 grey1 bold">
                  {educationDetail.institute}
                </span>
                <span className="h3 grey3 light">
                  , {educationDetail.place}
                </span>
                <div className="education-bars">
                  <BarGraph
                    value={educationDetail.percentage}
                    currentStep={1}
                    sectionStep={1}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SectionVisibilityHOC(Education, "education");
