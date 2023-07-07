import React from "react";
import { useTranslation } from "react-i18next";
import { BiMessageSquareDetail } from "react-icons/bi";
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
  const { t } = useTranslation();

  return (
    <div className="contact-me-button">
      <Button
        onClick={contactMeButtonHandler}
        variant="neutral"
        Icon={BiMessageSquareDetail}
        label={t("CONTACT_ME")}
      />
    </div>
  );
};

export default ContactMeButton;
