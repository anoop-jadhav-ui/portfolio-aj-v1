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
        >
            <img
                className="icon"
                src={skill.image}
                alt={skill.name}
                width="32px"
                height="32px"
            />
            <div className="skill">{skill.name}</div>
        </a>
    )
}

export default SkillPill
