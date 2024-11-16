import { Github, Link } from 'lucide-react'
import React from 'react'
import { ProjectDetails } from '../../../types/profileDataTypes'
import Tag from '../../Atoms/Tag/Tag'
import './ProjectCard.css'

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
                        return <Tag label={ele} key={String(index)} />
                    })}
                </div>
                <div className="description">{projectDetails.description}</div>
            </div>
            <div className="footer">
                <div className="projectlinks">
                    {projectDetails.github && (
                        <div onClick={openGithubLink} className="link">
                            <Github className="contactimg" />
                        </div>
                    )}
                    {projectDetails.url && (
                        <div onClick={openProjectLink} className="link">
                            <Link className="contactimg" />
                        </div>
                    )}
                </div>
                {/* <div className={`projectstatus ${projectDetails.status}`}>
                    <div className="statuscircle" />
                    <div className="label">{projectDetails.status}</div>
                </div> */}
            </div>
        </div>
    )
}

export default ProjectCard
