// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { App } from "../../../src/components/App/App";
import dummyData from "../../../src/components/TestData/testData.json";

let props = {
  dbData: dummyData,
  leftPaneData: [
    {
      class: "summary",
      headerPos: 0,
      id: "summary",
      key: 0,
      label: "Summary",
    },
  ],
  showLoader: false,
  toggleLoader: jest.fn(),
  fetchData: jest.fn().mockReturnValueOnce(dummyData),
};

test("Should render App", async () => {
  let props = {
    toggleLoader: jest.fn(),
    fetchData: jest.fn().mockReturnValueOnce(dummyData),
  };
  render(<App {...props} />);
});
