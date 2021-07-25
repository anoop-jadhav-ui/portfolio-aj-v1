import React from "react";
import "./ContactIcons.css";

import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import insta from "../../assets/insta.svg";

const ContactIcons = (props) => {
  return (
    <div className={"horizontally-placed " + props.className}>
      <div className="subsection-data">
        <a
          href={"mailto: " + props.data.contactDetails.emailId}
          title="Email Address"
        >
          <img className="contactimg" src={email} alt="contact img"></img>
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={props.data.contactDetails.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <img className="contactimg" src={linkedin} alt="linkedin img"></img>
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={
            "https://www.instagram.com/" + props.data.contactDetails.instaId
          }
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram"
        >
          <img className="contactimg" src={insta} alt="Instagram img"></img>
        </a>
      </div>

      <div className="subsection-data">
        <a
          href={props.data.contactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <img className="contactimg" src={github} alt="github img"></img>
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
