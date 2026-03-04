import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactIcons from '../../Molecules/ContactIcons/ContactIcons'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionWrapper from '../../Molecules/SectionWrapper/SectionWrapper'

const headingId = `${sectionDetails.contactDetails.class}-heading`

const Contact = () => {
    const { t } = useTranslation()
    return (
        <>
            <h2 id={headingId} className="section-title h2 bold">
                {t(sectionDetails.contactDetails.label)}
                {sectionDetails.contactDetails.icon}
            </h2>
            <div className="subsection">
                <div>{t('contactDetailsMessage')}</div>
                <ContactIcons className="" />
            </div>
        </>
    )
}

export default SectionWrapper(
    Contact,
    sectionDetails.contactDetails.class,
    headingId
)
