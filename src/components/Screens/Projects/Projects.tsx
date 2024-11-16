import './Projects.css'

import { Lightbulb } from 'lucide-react'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import constants from '../../../helpers/constants'
import ProjectCard from '../../Molecules/ProjectCard/ProjectCard'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

function Projects() {
    const {
        profileData: { projects },
    } = useProfileDataContext()

    const { t } = useTranslation()

    const sortedProjects = useMemo(() => {
        return projects.sort((a, b) => a.priority - b.priority)
    }, [projects])

    return (
        <>
            <div className="section-title h2 bold">
                {t('sectionName.funLearningProjects')}
                <Lightbulb size="2rem" />
            </div>
            <div className="subsection project-section-body">
                {sortedProjects.map((projectDetails, index) => {
                    return (
                        <ProjectCard
                            key={String(index)}
                            projectDetails={projectDetails}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper(Projects, constants.classNames.PROJECTS)
