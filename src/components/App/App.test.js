// import dependencies
import React from "react";

import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";

import DataReducer from "../Store/Reducers/DataReducer";
import FeedbackReducer from "../Store/Reducers/FeedbackReducer";

// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// the component to test
import { App } from "./App";
import dummyData from "../../TestData/testData.json";

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

export function createTestStore() {
  const store = createStore(
    combineReducers({
      dr: DataReducer,
      fr: FeedbackReducer,
    })
  );
  return store;
}

test("Should render App", async () => {
  render(
    <Provider store={createTestStore()}>
      <App {...props} />
    </Provider>
  );
});
