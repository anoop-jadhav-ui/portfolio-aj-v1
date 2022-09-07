import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import "./Skills.css";
import { useGlobalContext } from "../../../context/GlobalContext";

const Skills = () => {
  const { profileData } = useGlobalContext();
  const { skills } = profileData;
  const { development, design } = skills;
  return (
    <div className="col-md-7 page-1 text-left section skills">
      <div className="section-title h2 bold">Skills</div>

      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Development
        </div>
        <div className="subsection-data">
          {development.map((skill, key) => {
            return (
              <div
                key={key}
                className="skill-bar-wrapper row no-gutters align-items-center"
              >
                <div className="skill-label grey-1 body-text bold col-md-3">
                  {skill.skillName}
                </div>
                <BarGraph
                  class="col-md-9"
                  value={skill.skillValue}
                  currentStep={1}
                  sectionStep={1}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Design
        </div>
        <div className="subsection-data">
          {design.map((skill, key) => {
            return (
              <div
                key={key}
                className="skill-bar-wrapper row no-gutters align-items-center"
              >
                <div className="skill-label grey-1 body-text bold col-md-3">
                  {skill.skillName}
                </div>
                <BarGraph
                  class="col-md-9"
                  value={skill.skillValue}
                  currentStep={1}
                  sectionStep={1}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
