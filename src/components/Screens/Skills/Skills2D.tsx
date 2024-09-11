import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { useSectionInViewContext } from '../../../context/SectionInViewContext'
import BarGraph from '../../Atoms/BarGraph/BarGraph'

const Skills2D = () => {
    const {
        profileData: { skills },
    } = useProfileDataContext()
    const { development, design } = skills
    const { isSkillsSectionVisited } = useSectionInViewContext()
    const { t } = useTranslation()

    return (
        <>
            <div className="subsection skills-content">
                <div className="subsection-title uppercase body-text grey5 letterspacing-1">
                    {t('development')}
                </div>
                <div className="subsection-data">
                    {development.map((skill, key) => {
                        return (
                            <div
                                key={String(key)}
                                className="skill-bar-wrapper"
                            >
                                <div className="skill-label grey-1 body-text bold">
                                    {skill.skillName}
                                </div>
                                <BarGraph
                                    value={skill.skillValue}
                                    animate={isSkillsSectionVisited}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="subsection skills-content">
                <div className="subsection-title uppercase body-text grey5 letterspacing-1">
                    {t('design')}
                </div>
                <div className="subsection-data">
                    {design.map((skill, key) => {
                        return (
                            <div
                                key={String(key)}
                                className="skill-bar-wrapper"
                            >
                                <div className="skill-label grey-1 body-text bold">
                                    {skill.skillName}
                                </div>
                                <BarGraph
                                    value={skill.skillValue}
                                    animate={isSkillsSectionVisited}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills2D
