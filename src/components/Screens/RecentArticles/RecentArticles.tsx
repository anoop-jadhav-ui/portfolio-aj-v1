import React from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import "./RecentArticles.scss";
function RecentArticles() {
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

export default SectionVisibilityHOC(
  RecentArticles,
  constants.classNames.PROJECTS
);
