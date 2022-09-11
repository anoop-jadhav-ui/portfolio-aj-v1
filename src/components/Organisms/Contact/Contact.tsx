import React from "react";
import "./Contact.css";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import SectionVisibilityHOC from "../SectionInViewWrapper/SectionVisibilityHOC";

const Contact = () => {
  return (
    <>
      <div className="section-title h2 bold">Contact Details</div>
      <div className="subsection">
        <div>
          Reach out to me on Email/LinkedIn or checkout some of my work on
          Instagram/Github -
        </div>
        <ContactIcons className="" />
      </div>
    </>
  );
};

export default SectionVisibilityHOC(Contact, "contactme");
