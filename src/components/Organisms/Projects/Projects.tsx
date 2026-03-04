
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import ProjectCard from '../../Molecules/ProjectCard/ProjectCard'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionWrapper from '../../Molecules/SectionWrapper/SectionWrapper'

const headingId = `${sectionDetails.projects.class}-heading`

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
            <h2 id={headingId} className="section-title h2 bold">
                {t(sectionDetails.projects.label)}
                {sectionDetails.projects.icon}
            </h2>
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

export default SectionWrapper(
    Projects,
    sectionDetails.projects.class,
    headingId
)
