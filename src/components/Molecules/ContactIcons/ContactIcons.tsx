import React from "react";
import "./ContactIcons.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import UseAnimations from "react-useanimations";
import email from "react-useanimations/lib/mail";
import linkedIn from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import githubIcon from "react-useanimations/lib/github";

const ContactIcons = ({ className }: { className: string }) => {
  const { profileData } = useGlobalContext();
  const { contactDetails } = profileData;
  const { emailId, linkedin, instaId, github } = contactDetails;
  const ICON_SIZE = className === "inside-leftpane" ? 32 : 48;

  return (
    <div className={"horizontally-placed " + className}>
      <div className="subsection-data">
        <a href={"mailto: " + emailId} title="Email Address">
          <UseAnimations
            size={ICON_SIZE}
            animation={email}
            strokeColor="var(--primary-color)"
          />
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin"
        >
          <UseAnimations
            size={ICON_SIZE}
            animation={linkedIn}
            strokeColor="var(--primary-color)"
          />
        </a>
      </div>
      <div className="subsection-data">
        <a
          href={"https://www.instagram.com/" + instaId}
          rel="noopener noreferrer"
          target="_blank"
          title="Instagram"
        >
          <UseAnimations
            size={ICON_SIZE}
            animation={instagram}
            strokeColor="var(--primary-color)"
          />
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
          <UseAnimations
            size={ICON_SIZE}
            animation={githubIcon}
            strokeColor="var(--primary-color)"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
export { ContactIcons };
