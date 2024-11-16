import { BookUser } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import constants from '../../../helpers/constants'
import ContactIcons from '../../Molecules/ContactIcons/ContactIcons'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

const Contact = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {t('sectionName.contactDetails')}
                <BookUser size="2rem" />
            </div>
            <div className="subsection">
                <div>{t('contactDetailsMessage')}</div>
                <ContactIcons className="" />
            </div>
        </>
    )
}

export default SectionWrapper(Contact, constants.classNames.CONTACT_ME)
