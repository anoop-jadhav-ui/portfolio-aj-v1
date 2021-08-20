import React from "react";
import "./Contact.css";
import ContactIcons from "../ContactIcons/ContactIcons";

const Contact = ({ contactDetails }) => {
  return (
    <div
      className={"show-on-scroll col-md-7 page-1 text-left section contactme "}
    >
      <div className="section-title grey4 h2 bold">Contact Details</div>

      <div className="subsection">
        <div>
          Reach out to me on Email/LinkedIn or checkout some of my work on
          Instagram/Github -
        </div>
        <ContactIcons contactDetails={contactDetails} />
      </div>
    </div>
  );
};

export default Contact;
export { Contact };
