import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionWrapper from '../../Molecules/SectionWrapper/SectionWrapper'

const headingId = `${sectionDetails.hobbies.class}-heading`

function Hobbies() {
    const {
        profileData: { hobbies },
    } = useProfileDataContext()
    const { t } = useTranslation()
    return (
        <>
            <h2 id={headingId} className="section-title h2 bold">
                {t(sectionDetails.hobbies.label)}
                {sectionDetails.hobbies.icon}
            </h2>
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

export default SectionWrapper(Hobbies, sectionDetails.hobbies.class, headingId)
