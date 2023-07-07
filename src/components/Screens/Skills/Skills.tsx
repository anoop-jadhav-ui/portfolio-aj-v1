import React from "react";
import { useTranslation } from "react-i18next";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import constants from "../../../helpers/constants";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Skills.scss";

const Skills = () => {
  const {
    profileData: { skills },
  } = useProfileDataContext();
  const { development, design } = skills;
  const { currentSectionInView } = useSectionInViewContext();
  const { t } = useTranslation();

  const isSkillsSectionVisible =
    currentSectionInView === constants.classNames.SKILLS;
  return (
    <>
      <div className="section-title h2 bold">{t("skills")}</div>
      <div className="subsection skills-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {t("development")}
        </div>
        <div className="subsection-data">
          {development.map((skill, key) => {
            return (
              <div key={String(key)} className="skill-bar-wrapper">
                <div className="skill-label grey-1 body-text bold">
                  {skill.skillName}
                </div>
                <BarGraph
                  value={skill.skillValue}
                  animate={isSkillsSectionVisible}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="subsection skills-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {t("design")}
        </div>
        <div className="subsection-data">
          {design.map((skill, key) => {
            return (
              <div key={String(key)} className="skill-bar-wrapper">
                <div className="skill-label grey-1 body-text bold">
                  {skill.skillName}
                </div>
                <BarGraph
                  value={skill.skillValue}
                  animate={isSkillsSectionVisible}
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
