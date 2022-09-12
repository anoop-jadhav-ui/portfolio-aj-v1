import React from "react";
import "./Contact.css";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
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

export default SectionVisibilityHOC(Contact, "contactme");
