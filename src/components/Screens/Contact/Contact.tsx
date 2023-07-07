import React from "react";
import { useTranslation } from "react-i18next";
import constants from "../../../helpers/constants";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="section-title h2 bold">{t("CONTACT_DETAILS")}</div>
      <div className="subsection">
        <div>{t("CONTACT_DETAILS_MESSAGE")}</div>
        <ContactIcons className="" />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, constants.classNames.CONTACT_ME);
