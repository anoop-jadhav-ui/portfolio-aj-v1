import React from "react";
import "./WorkExperience.css";
import { useGlobalContext } from "../../context/GlobalContext";

const WorkExperience = () => {
  const { profileData } = useGlobalContext();
  const { experience } = profileData;

  return (
    <div className="col-md-7 page-1 text-left section work-experience ">
      <div className="section-title h2 bold">Work Experience</div>

      <div className="subsection">
        {experience.map((experienceDetail, key) => {
          return (
            <div key={key} className="subsection-data">
              <span className="h3 grey1 bold">{experienceDetail.name}</span>
              <div className="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
                <span className="pr-3">{experienceDetail.fromToDates}</span>
                <span className="dot"></span>
                <span className="pl-3">{experienceDetail.totalYears}</span>
              </div>
              <div className="mt-3 grey-1 body-text">
                {experienceDetail.summary}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
