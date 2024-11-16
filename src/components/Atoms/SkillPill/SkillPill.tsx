import React from 'react'
import './SkillPill.css'
import { ExternalLink } from 'lucide-react'

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
                width="64px"
                height="64px"
            />
            <div className="name">{skill.name}</div>
            <ExternalLink
                size="1rem"
                className="open-link-icon primary-color"
            />
        </a>
    )
}

export default SkillPill
