import "./Skills.scss";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import constants from "../../../helpers/constants";
import Toggle from "../../Atoms/Toggle/Toggle";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import Skills2D from "./Skills2D";
import Skills3D from "./Skills3D";

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
      <div hidden={!is3D}>
        <Skills2D />
      </div>
      <div hidden={is3D}>
        <Skills3D />
      </div>
    </>
  );
};

export default SectionVisibilityHOC(Skills, constants.classNames.SKILLS);
