import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import "./Skills.scss";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";

const Skills = () => {
  const {
    profileData: { skills },
  } = useProfileDataContext();
  const { development, design } = skills;
  return (
    <>
      <div className="section-title h2 bold">{T.SKILLS}</div>
      <div className="subsection skills-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DEVELOPMENT}
        </div>
        <div className="subsection-data">
          {development.map((skill, key) => {
            return (
              <div key={String(key)} className="skill-bar-wrapper">
                <div className="skill-label grey-1 body-text bold">
                  {skill.skillName}
                </div>
                <BarGraph value={skill.skillValue} animate={true} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="subsection skills-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DESIGN}
        </div>
        <div className="subsection-data">
          {design.map((skill, key) => {
            return (
              <div key={String(key)} className="skill-bar-wrapper">
                <div className="skill-label grey-1 body-text bold">
                  {skill.skillName}
                </div>
                <BarGraph value={skill.skillValue} animate={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionVisibilityHOC(Skills, constants.classNames.SKILLS);
