import './Skills.css'

import React from 'react'
import { useTranslation } from 'react-i18next'
import constants from '../../../helpers/constants'
import SectionVisibilityHOC from '../../Organisms/SectionWrapper/SectionWrapper'

import blender from '../../../assets/skills/blender.svg'
import css3Icon from '../../../assets/skills/css3.svg'
import figma from '../../../assets/skills/figma.svg'
import htmlIcon from '../../../assets/skills/html5.svg'
import javascriptIcon from '../../../assets/skills/javascript.svg'
import jest from '../../../assets/skills/jest.svg'
import materialUi from '../../../assets/skills/materialUi.svg'
import mobX from '../../../assets/skills/mobX.svg'
import nextJs from '../../../assets/skills/nextJs.svg'
import playwright from '../../../assets/skills/playwright.svg'
import react from '../../../assets/skills/react.svg'
import typescript from '../../../assets/skills/typescript.svg'

import { Cog } from 'lucide-react'
import SkillPill, { SkillOption } from '../../Atoms/SkillPill/SkillPill'

const skillOptions: SkillOption[] = [
    {
        id: 1,
        name: 'HTML',
        image: htmlIcon,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        id: 2,
        name: 'CSS',
        image: css3Icon,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        id: 3,
        name: 'Javascript',
        image: javascriptIcon,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        id: 4,
        name: 'Typescript',
        image: typescript,
        link: 'https://www.typescriptlang.org/',
    },
    {
        id: 5,
        name: 'React',
        image: react,
        link: 'https://react.dev/',
    },
    {
        id: 6,
        name: 'Next.js',
        image: nextJs,
        link: 'https://nextjs.org/',
    },
    {
        id: 7,
        name: 'Material-UI',
        image: materialUi,
        link: 'https://mui.com/material-ui/',
    },
    {
        id: 8,
        name: 'Figma',
        image: figma,
        link: 'https://www.figma.com/',
    },
    {
        id: 9,
        name: 'Jest',
        image: jest,
        link: 'https://jestjs.io/',
    },
    {
        id: 10,
        name: 'MobX',
        image: mobX,
        link: 'https://mobx.js.org/README.html',
    },
    {
        id: 11,
        name: 'Playwright',
        image: playwright,
        link: 'https://playwright.dev/',
    },
    {
        id: 12,
        name: 'Blender',
        image: blender,
        link: 'https://www.blender.org/',
    },
]

const Skills = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className="skills-section-header">
                <div className="section-title h2 bold">
                    {t('sectionName.skills')}
                    <Cog size="2rem" />
                </div>
            </div>
            <div className="subsection">
                <div className="subsection-data">
                    <p className="subsection-title body-text">
                        {t('skillsSectionMessage')}
                    </p>
                    <div className="skill-pills">
                        {skillOptions.map((skill) => {
                            return <SkillPill key={skill.id} skill={skill} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionVisibilityHOC(Skills, constants.classNames.SKILLS)
