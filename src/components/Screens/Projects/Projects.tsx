import React from "react";
import { useTranslation } from "react-i18next";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Projects.scss";

function Projects() {
  const {
    profileData: { projects },
  } = useProfileDataContext();

  const { t } = useTranslation();

  return (
    <>
      <div className="section-title h2 bold">{t("funLearningProjects")}</div>
      <div className="subsection project-section-body">
        {projects.map((projectDetails, index) => {
          return (
            <ProjectCard key={String(index)} projectDetails={projectDetails} />
          );
        })}
      </div>
    </>
  );
}

export default SectionWrapper(Projects, constants.classNames.PROJECTS);
