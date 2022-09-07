import React from "react";
import "./ProjectCard.css";
import github from "../../assets/github.svg";
import weblink from "../../assets/weblink.svg";
import { ProjectDetails } from "../../Types/profileDataTypes";

const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: ProjectDetails;
}) => {
  return (
    <div className="projectcard">
      <div>
        <div className="header h4 bold">{projectDetails.projectName}</div>
        <div className="tags">
          {projectDetails.tags &&
            projectDetails.tags.map((ele, index) => {
              return (
                <div className="tag label" key={index} title={ele}>
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
              <img
                className="contactimg"
                title="view project on github"
                src={github}
                alt="github"
              />
            </a>
          )}
          {projectDetails.url && (
            <a
              href={projectDetails.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contactimg"
                title="open app"
                src={weblink}
                alt="github"
              />
            </a>
          )}
        </div>
        <div className={`projectstatus ${projectDetails.status}`}>
          <div className="statuscircle"></div>
          <div className="label">{projectDetails.status}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
