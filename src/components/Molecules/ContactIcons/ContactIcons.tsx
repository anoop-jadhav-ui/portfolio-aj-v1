import React from "react";
import "./ContactIcons.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const ContactIcons = ({ className }: { className: string }) => {
  const { profileData } = useGlobalContext();
  const { contactDetails } = profileData;
  const { emailId, linkedin, instaId, github } = contactDetails;
  return (
    <div className={"horizontally-placed " + className}>
      <div className="subsection-data">
        <a href={"mailto: " + emailId} title="Email Address">
          <FiMail className="contactimg" title="email address" />
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <FiLinkedin className="contactimg" title="linkedin link" />
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={"https://www.instagram.com/" + instaId}
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram"
        >
          <FiInstagram className="contactimg" title="instagram link" />
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
          <FiGithub className="contactimg" title="github link" />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
export { ContactIcons };
