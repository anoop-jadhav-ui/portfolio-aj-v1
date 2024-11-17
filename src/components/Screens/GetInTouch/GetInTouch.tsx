import './GetInTouch.css'

import React from 'react'
import { useTranslation } from 'react-i18next'
import MessageForm from '../../Molecules/MessageForm/MessageForm'
import { sectionDetails } from '../../Organisms/LeftPane/leftPaneData'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

export const GetInTouch = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {sectionDetails.getInTouch.label}
                {sectionDetails.getInTouch.icon}
            </div>
            <div id="contact-form" className="subsection message-content">
                <div className="subsection-data">
                    <p className="subsection-title body-text">
                        {t('messageFormSubtitle')}
                    </p>
                    <MessageForm />
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(GetInTouch, sectionDetails.getInTouch.class)
