import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { ProjectDetails } from '../../../types/profileDataTypes'
import './ProjectCard.scss'

const ProjectCard = ({
    projectDetails,
}: {
    projectDetails: ProjectDetails
}) => {
    const openGithubLink = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation()
        window.open(projectDetails.github, '_blank', 'noopener')
    }

    const openProjectLink = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation()
        window.open(projectDetails.url, '_blank', 'noopener')
    }

    return (
        <div className="project-card" onClick={openProjectLink}>
            <div>
                <div className="h4 bold">{projectDetails.projectName}</div>
                <div className="tags">
                    {projectDetails.tags?.map((ele, index) => {
                        return (
                            <div
                                className="tag label"
                                key={String(index)}
                                title={ele}
                            >
                                {ele}
                            </div>
                        )
                    })}
                </div>
                <div className="description">{projectDetails.description}</div>
            </div>
            <div className="footer">
                <div className="projectlinks">
                    {projectDetails.github && (
                        <div onClick={openGithubLink} className="link">
                            <FiGithub
                                className="contactimg"
                                title="github link"
                            />
                        </div>
                    )}
                    {projectDetails.url && (
                        <div onClick={openProjectLink} className="link">
                            <FiExternalLink
                                className="contactimg"
                                title="application link"
                            />
                        </div>
                    )}
                </div>
                <div className={`projectstatus ${projectDetails.status}`}>
                    <div className="statuscircle" />
                    <div className="label">{projectDetails.status}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
