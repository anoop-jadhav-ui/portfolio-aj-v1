import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import "./Skills.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";

const Skills = () => {
  const { profileData } = useGlobalContext();
  const { skills } = profileData;
  const { development, design } = skills;
  return (
    <>
      <div className="section-title h2 bold">{T.SKILLS}</div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DEVELOPMENT}
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
                  className="col-md-9"
                  value={skill.skillValue}
                  animate={true}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DESIGN}
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
                  className="col-md-9"
                  value={skill.skillValue}
                  animate={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionVisibilityHOC(Skills, constants.classNames.SKILLS);
