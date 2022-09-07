import React from "react";
import "./Contact.css";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";

const Contact = () => {
  return (
    <div className="col-md-7 page-1 text-left section contactme ">
      <div className="section-title h2 bold">Contact Details</div>

      <div className="subsection">
        <div>
          Reach out to me on Email/LinkedIn or checkout some of my work on
          Instagram/Github -
        </div>
        <ContactIcons className="" />
      </div>
    </div>
  );
};

export default Contact;
export { Contact };
