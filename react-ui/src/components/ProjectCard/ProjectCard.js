import React from 'react'
import './ProjectCard.css'
import github from '../../assets/github.svg';
import weblink from '../../assets/weblink.svg';

const ProjectCard = (props) => {
    return (
        <div className="projectcard">
            <div>
            <div className="header h4 bold">
                {props.data.projectName}
            </div>
            <div className="tags">
                {props.data.tags && props.data.tags.map((ele, index) => {
                    return (
                        <div className="tag label" key={index} title={ele}>
                            {ele}
                        </div>
                    )
                })}
            </div>
            <div className="description">
                {props.data.description}
            </div>
            </div>
            <div className="footer">
            <div className="projectlinks">
                { props.data.github && <a href={props.data.github}><img className="contactimg" title="view project on github" src={github} alt="github"/></a>}
                { props.data.url && <a href={props.data.url}><img className="contactimg" title="open app" src={weblink} alt="github"/></a> } 
            </div>
            <div className={`projectstatus ${props.data.status}`}>
                <div className="statuscircle"></div>
                <div className="label">{props.data.status}</div>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard;