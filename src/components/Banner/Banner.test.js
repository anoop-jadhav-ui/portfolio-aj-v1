import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { Banner } from "./Banner";

let props = {
  text: "banner test for testing",
  type: "error",
  closeBanner: jest.fn()
};

test("Should render Banner and close banner method called on click ", async () => {
  render(<Banner {...props} />);
  expect(screen.getByTestId("banner").classList).toContain("error-banner");
  expect(screen.getByTestId("banner-text")).toHaveTextContent(
    "banner test for testing"
  );
  fireEvent.click(screen.getByTestId("bannerclosebutton"));
  expect(props.closeBanner).toBeCalled();
});
