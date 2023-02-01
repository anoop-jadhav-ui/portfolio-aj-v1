import React from "react";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
const Contact = () => {
  return (
    <>
      <div className="section-title h2 bold">{T.CONTACT_DETAILS}</div>
      <div className="subsection">
        <div>{T.CONTACT_DETAILS_MESSAGE}</div>
        <ContactIcons className="" />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, constants.classNames.CONTACT_ME);
