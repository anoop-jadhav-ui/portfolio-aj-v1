import './ContactMeButton.css'

import { MessageSquareText } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../Atoms/Button/Button'

const ContactMeButton = () => {
    const contactMeButtonHandler = async () => {
        document.getElementById('contact-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        })
    }
    const { t } = useTranslation()

    return (
        <div className="contact-me-button">
            <Button
                onClick={contactMeButtonHandler}
                variant="neutral"
                endIcon={<MessageSquareText />}
                label={t('button.contactMe')}
            />
        </div>
    )
}

export default ContactMeButton
