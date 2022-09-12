import React from "react";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import "./Projects.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../SectionVisibilityHOC/SectionVisibilityHOC";

function Projects() {
  const { profileData } = useGlobalContext();
  const { projects } = profileData;

  return (
    <>
      <div className="section-title h2 bold">Fun Learning Projects</div>
      <div className="subsection projectsectionbody">
        {projects.map((projectDetails, index) => {
          return <ProjectCard key={index} projectDetails={projectDetails} />;
        })}
      </div>
    </>
  );
}

export default SectionVisibilityHOC(Projects, "projects");
