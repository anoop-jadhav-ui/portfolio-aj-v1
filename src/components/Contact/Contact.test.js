import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { Contact } from "./Contact";

const contactDetails = {
  contactNumber: "(+91) 9028665267",
  emailId: "anoopjadhav@gmail.com",
  github: "https://github.com/Anoopjadhav",
  instaId: "anoop.designs",
  linkedin: "https://www.linkedin.com/in/anoop-jadhav-44528258"
};

let props = {
  contactDetails: contactDetails,
  currentStep: 1
};

test("Should render Contact Correctly", async () => {
  render(<Contact {...props} />);
});
