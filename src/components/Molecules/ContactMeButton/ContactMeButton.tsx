import React from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import { BiMessageSquareDetail } from "react-icons/bi";
import T from "../../../translations/en_IN";
import Button from "../../Atoms/Button/Button";
import "./ContactMeButton.scss";

const ContactMeButton = () => {
  const contactMeButtonHandler = async () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="contact-me-button">
      <Button
        onClick={contactMeButtonHandler}
        variant="neutral"
        Icon={BiMessageSquareDetail}
        label={T.CONTACT_ME}
      />
    </div>
  );
};

export default ContactMeButton;
