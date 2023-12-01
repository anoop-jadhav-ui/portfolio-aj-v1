import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import constants from "../../../helpers/constants";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import Toggle from "../../Atoms/Toggle/Toggle";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";

const HtmlModel = React.lazy(() => import("../../Atoms/3DModels/HtmlModel"));
const CSSModel = React.lazy(() => import("../../Atoms/3DModels/CSSModel"));
const JsModel = React.lazy(() => import("../../Atoms/3DModels/JsModel"));
const ReactModel = React.lazy(() => import("../../Atoms/3DModels/ReactModel"));
const FigmaModel = React.lazy(() => import("../../Atoms/3DModels/FigmaModel"));
const BlenderModel = React.lazy(
  () => import("../../Atoms/3DModels/BlenderModel")
);

import SectionLoader from "../../Atoms/SectionLoader/SectionLoader";
import "./Skills.scss";

const Skills3D = () => {
  const { t } = useTranslation();
  return (
    <Suspense
      fallback={
        <SectionLoader
          label="Loading 3D Models"
          secondaryLabel="Thank you for your patience."
        />
      }
    >
      <div className="subsection skills-content">
        <div className="skills-3d-grid">
          <HtmlModel scale={1.5} />
          <JsModel scale={1.5} />
          <CSSModel scale={1.5} />
          <ReactModel scale={0.5} />
          <FigmaModel scale={0.65} />
          <BlenderModel scale={1} />
        </div>
      </div>
    </Suspense>
  );
};

const Skills2D = () => {
  const {
    profileData: { skills },
  } = useProfileDataContext();
  const { development, design } = skills;
  const { isSkillsSectionVisited } = useSectionInViewContext();
  const { t } = useTranslation();

  return (
    <>
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
                  animate={isSkillsSectionVisited}
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
                  animate={isSkillsSectionVisited}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const [is3D, setIs3D] = useState(true);

  return (
    <>
      <div className="skills-section-header">
        <div className="section-title h2 bold">{t("sectionName.skills")}</div>
        <Toggle
          checked={is3D}
          onChange={() => setIs3D((prev) => !prev)}
          onLabel="2D"
          offLabel="3D"
        />
      </div>
      {is3D ? <Skills2D /> : <Skills3D />}
    </>
  );
};

export default SectionVisibilityHOC(Skills, constants.classNames.SKILLS);
