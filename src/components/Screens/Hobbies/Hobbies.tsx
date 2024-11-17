import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { sectionDetails } from '../../Organisms/LeftPane/leftPaneData'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

function Hobbies() {
    const {
        profileData: { hobbies },
    } = useProfileDataContext()
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {sectionDetails.hobbies.label}
                {sectionDetails.hobbies.icon}
            </div>
            <div className="subsection">
                {hobbies.map((hobby, key) => {
                    return (
                        <div className="subsection-data" key={String(key)}>
                            <span className="h3 grey1 bold">{hobby.name}</span>
                            <div className="mt-2 grey-1 body-text">
                                {hobby.summary}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper(Hobbies, sectionDetails.hobbies.class)
