import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { Certifications } from "./Certifications";

const testDataCertifications = {
  design: [
    {
      name: "Test Name",
      summary: "Test Summary",
      urlToCertificate: "Test URL"
    }
  ],
  development: [
    {
      name: "Test Name",
      summary: "Test Summary",
      urlToCertificate: "Test URL"
    }
  ]
};

let props = {
  certifications: testDataCertifications,
  currentStep: 1
};

test("Should render Certifications Correctly", async () => {
  render(<Certifications {...props} />);
  expect(screen.getByTestId("name")).toHaveTextContent("Test Name");
});
