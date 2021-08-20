import React from "react";
import "./ContactIcons.css";

import email from "../../assets/email.svg";
import linkedinImg from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";
import instaImg from "../../assets/insta.svg";

const ContactIcons = ({
  className,
  contactDetails: { emailId, linkedin, instaId, github }
}) => {
  return (
    <div className={"horizontally-placed " + className}>
      <div className="subsection-data">
        <a href={"mailto: " + emailId} title="Email Address">
          <img className="contactimg" src={email} alt="contact img"></img>
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <img
            className="contactimg"
            src={linkedinImg}
            alt="linkedin img"
          ></img>
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={"https://www.instagram.com/" + instaId}
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram"
        >
          <img className="contactimg" src={instaImg} alt="Instagram img"></img>
        </a>
      </div>

      <div className="subsection-data">
        <a
          data-testid="github"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <img className="contactimg" src={githubImg} alt="github img"></img>
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
export { ContactIcons };
