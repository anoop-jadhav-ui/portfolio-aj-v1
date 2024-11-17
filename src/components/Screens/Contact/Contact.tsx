import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactIcons from '../../Molecules/ContactIcons/ContactIcons'
import { sectionDetails } from '../../Organisms/LeftPane/leftPaneData'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

const Contact = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {sectionDetails.contactDetails.label}
                {sectionDetails.contactDetails.icon}
            </div>
            <div className="subsection">
                <div>{t('contactDetailsMessage')}</div>
                <ContactIcons className="" />
            </div>
        </>
    )
}

export default SectionWrapper(Contact, sectionDetails.contactDetails.class)
