import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { BarGraph } from "./BarGraph";

let props = {
  value: "60",
  currentStep: "1",
  sectionStep: "1"
};

test("Should render Bar Graph Correctly", async () => {
  render(<BarGraph {...props} />);
  expect(screen.getByTestId("bar-graph"));
  expect(screen.getByTestId("bar").style.width).toBe("60%");
});
