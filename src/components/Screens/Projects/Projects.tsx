import React from "react";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import "./Projects.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";
function Projects() {
  const { profileData } = useGlobalContext();
  const { projects } = profileData;

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

export default SectionVisibilityHOC(Projects, constants.classNames.PROJECTS);
