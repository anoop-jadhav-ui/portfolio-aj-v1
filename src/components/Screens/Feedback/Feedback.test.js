import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//setup mock server
import { setupServer } from "msw/node";
import { rest } from "msw";

import Store from "../Store/Store";
import { Provider } from "react-redux";
// the component to test
import Feedback from "./Feedback";

const server = setupServer(
  rest.post(
    "https://portfolio-mailserver.herokuapp.com/mail",
    (req, res, ctx) => {
      sessionStorage.setItem("is-authenticated", "true");
      return res(ctx.json({ msg: "success" }));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Submit if feedback message is not empty", async () => {
  render(
    <Provider store={Store}>
      <Feedback />
    </Provider>
  );

  const feedbackBox = screen.getByTestId("feedback-box");
  fireEvent.change(feedbackBox, {
    target: { value: "Some Random Feedback Message" },
  });

  fireEvent.click(screen.getByTestId("feedback-button"));

  await waitFor(() =>
    expect(screen.getByTestId("banner")).toHaveTextContent(
      "Submitting your feedback..."
    )
  );

  await waitFor(() =>
    expect(screen.getByTestId("banner")).toHaveTextContent(
      "Thank you for your feedback"
    )
  );
});

test("Do not Submit if feedback message is empty", async () => {
  render(
    <Provider store={Store}>
      <Feedback />
    </Provider>
  );

  const feedbackBox = screen.getByTestId("feedback-box");
  fireEvent.change(feedbackBox, {
    target: { value: "" },
  });

  fireEvent.click(screen.getByTestId("feedback-button"));
  expect(screen.queryByTestId("banner")).not.toBeInTheDocument();
});

test("Do not Submit if Server throws an error", async () => {
  server.use(
    rest.post(
      "https://portfolio-mailserver.herokuapp.com/mail",
      (req, res, ctx) => {
        sessionStorage.setItem("is-authenticated", "true");
        return res.networkError("Failed to connect");
      }
    )
  );
  render(
    <Provider store={Store}>
      <Feedback />
    </Provider>
  );
  const feedbackBox = screen.getByTestId("feedback-box");
  fireEvent.change(feedbackBox, {
    target: { value: "Some value " },
  });

  fireEvent.click(screen.getByTestId("feedback-button"));
  expect(screen.getByTestId("banner")).toHaveTextContent(
    "Submitting your feedback..."
  );
  await waitFor(() => {
    expect(screen.getByTestId("banner")).toHaveTextContent(
      "Sorry Couldn't send your message. Please try again later."
    );
  });

  fireEvent.click(screen.getByTestId("bannerclosebutton"));
  expect(screen.queryByTestId("banner")).not.toBeInTheDocument();
});

test("Do not Submit if Server fails to update feedback", async () => {
  server.use(
    rest.post(
      "https://portfolio-mailserver.herokuapp.com/mail",
      (req, res, ctx) => {
        sessionStorage.setItem("is-authenticated", "true");
        return res(ctx.json({ msg: "fail" }));
      }
    )
  );
  render(
    <Provider store={Store}>
      <Feedback />
    </Provider>
  );
  const feedbackBox = screen.getByTestId("feedback-box");
  fireEvent.change(feedbackBox, {
    target: { value: "Some value " },
  });

  fireEvent.click(screen.getByTestId("feedback-button"));
  expect(screen.getByTestId("banner")).toHaveTextContent(
    "Submitting your feedback..."
  );
  await waitFor(() => {
    expect(screen.getByTestId("banner")).toHaveTextContent(
      "Sorry Couldn't send your message. Please try again later."
    );
  });

  fireEvent.click(screen.getByTestId("bannerclosebutton"));
  expect(screen.queryByTestId("banner")).not.toBeInTheDocument();
});
