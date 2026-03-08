import { ExternalLink } from 'lucide-react'

export type SkillOption = {
    id: number
    name: string
    image: string | { src: string }
    link: string
}

const getImageSrc = (image: SkillOption['image']) =>
    typeof image === 'string' ? image : image.src

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
                src={getImageSrc(skill.image)}
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
