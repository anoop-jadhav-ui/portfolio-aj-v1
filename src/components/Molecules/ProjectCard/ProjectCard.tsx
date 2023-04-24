import React from "react";
import "./ProjectCard.scss";
import { ProjectDetails } from "../../../types/profileDataTypes";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) => {
  return (
    <div className="projectcard">
      <div>
        <div className="h4 bold">{projectDetails.projectName}</div>
        <div className="tags">
          {projectDetails.tags?.map((ele, index) => {
            return (
              <div className="tag label" key={String(index)} title={ele}>
                {ele}
              </div>
            );
          })}
        </div>
        <div className="description">{projectDetails.description}</div>
      </div>
      <div className="footer">
        <div className="projectlinks">
          {projectDetails.github && (
            <a
              href={projectDetails.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="contactimg" title="github link" />
            </a>
          )}
          {projectDetails.url && (
            <a
              href={projectDetails.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="contactimg" title="application link" />
            </a>
          )}
        </div>
        <div className={`projectstatus ${projectDetails.status}`}>
          <div className="statuscircle" />
          <div className="label">{projectDetails.status}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
