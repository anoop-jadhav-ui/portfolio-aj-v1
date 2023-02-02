import React from "react";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Projects.scss";
function Projects() {
  const {
    profileData: { projects },
  } = useProfileDataContext();

  return (
    <>
      <div className="section-title h2 bold">{T.FUN_LEARNING_PROJECTS}</div>
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
