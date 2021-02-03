import React from 'react'
import './ProjectCard.css'
import github from '../../assets/github.svg';
import weblink from '../../assets/weblink.svg';

const ProjectCard = (props) => {
    return (
        <div className="projectcard">
            <div className="header h4 bold">
                {props.data.projectName}
            </div>
            <div className="tags">
                {props.data.tags && props.data.tags.map((ele, index) => {
                    return (
                        <div className="tag label" key={index}>
                            {ele}
                        </div>
                    )
                })}
            </div>
            <div className="description">
                {props.data.description}
            </div>
            <div className="projectlinks">
                <a href=""><img className="contactimg" title="view project on github" src={github} alt="github"/></a>
                <a href=""><img className="contactimg" title="open app" src={weblink} alt="github"/></a>
            </div>

        </div>
    )
}

export default ProjectCard;