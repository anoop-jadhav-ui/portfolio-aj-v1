import './ContactIcons.css'

import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { useProfileDataContext } from '../../../context/ProfileDataContext'

const ContactIcons = ({ className }: { className: string }) => {
    const {
        profileData: { contactDetails },
    } = useProfileDataContext()
    const { emailId, linkedin, instaId, github } = contactDetails
    const ICON_SIZE = className === 'inside-leftpane' ? 24 : 38

    return (
        <div className={`horizontally-placed ${className}`}>
            <div className="subsection-data">
                <a
                    href={`mailto: ${emailId}`}
                    title="Email Address"
                    className="social-link"
                >
                    <Mail size={ICON_SIZE} />
                </a>
            </div>
            <div className="subsection-data">
                <a
                    href={linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Linkedin"
                    className="social-link"
                >
                    <Linkedin size={ICON_SIZE} />
                </a>
            </div>
            <div className="subsection-data">
                <a
                    href={`https://www.instagram.com/${instaId}`}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Instagram"
                    className="social-link"
                >
                    <Instagram size={ICON_SIZE} />
                </a>
            </div>

            <div className="subsection-data">
                <a
                    data-testid="github"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="social-link"
                >
                    <Github size={ICON_SIZE} />
                </a>
            </div>
        </div>
    )
}

export default ContactIcons
export { ContactIcons }
