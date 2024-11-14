import React from 'react'
import './SkillPill.scss'

export type SkillOption = {
    id: number
    name: string
    image: string
    link: string
}

const SkillPill = ({ skill }: { skill: SkillOption }) => {
    return (
        <a
            className="skill-pill"
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            title="click to open link"
        >
            <img
                className="icon"
                src={skill.image}
                alt={skill.name}
                width="38px"
                height="38px"
            />
            <div className="skill">{skill.name}</div>
        </a>
    )
}

export default SkillPill
