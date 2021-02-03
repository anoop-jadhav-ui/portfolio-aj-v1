import React from 'react'
import './ContactIcons.css'

import email from '../../assets/email.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import insta from '../../assets/insta.svg';

const ContactIcons = (props) => {
    return (
        <div className={ "horizontally-placed " + props.className }>
            <div className="subsection-data">
                <a href={"mailto: " + props.data.contactDetails.emailId} title="Email Address"><img className="contactimg" src={email}></img></a>
            </div>
            <div className="subsection-data">
                <a href={props.data.contactDetails.linkedin} target="_blank" title="Linkedin"><img className="contactimg" src={linkedin}></img></a>
            </div>
            <div className="subsection-data">
                <a href={"https://www.instagram.com/" + props.data.contactDetails.instaId} target="_blank" title="Instagram"><img className="contactimg" src={insta}></img></a>
            </div>

            <div className="subsection-data">
                <a href={props.data.contactDetails.github} target="_blank" title="Github"><img className="contactimg" src={github}></img></a>
            </div>
        </div>
    )
}

export default ContactIcons;