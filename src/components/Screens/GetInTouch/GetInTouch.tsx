import './GetInTouch.scss'

import React from 'react'
import { useTranslation } from 'react-i18next'
import constants from '../../../helpers/constants'
import MessageForm from '../../Molecules/MessageForm/MessageForm'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

export const GetInTouch = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {t('sectionName.messageFormTitle')}
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

export default SectionWrapper(GetInTouch, constants.classNames.GET_IN_TOUCH)
