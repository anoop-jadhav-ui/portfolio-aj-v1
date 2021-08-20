import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//setup mock server
import { setupServer } from "msw/node";
import { rest } from "msw";
// the component to test
import { Feedback } from "./Feedback";

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

const props = {
  message: "",
  messageStatus: "",
  updateMessage: jest.fn(),
  updateBannerStatus: jest.fn()
};

test("Submit if feedback message is not empty", async () => {
  props.message = "Some feedback message";
  props.messageStatus = "success";

  render(<Feedback {...props} />);

  fireEvent.click(screen.getByTestId("feedback-button"));

  await waitFor(() => {
    expect(props.updateBannerStatus).toBeCalledTimes(2);
    expect(props.updateBannerStatus.mock.calls[0][0]).toBe("neutral");
    expect(props.updateBannerStatus.mock.calls[1][0]).toBe("success");
    expect(props.updateMessage.mock.calls[0][0]).toBe("");
  });
});

test("Don't Submit if feedback message is empty", async () => {
  props.message = "";

  render(<Feedback {...props} />);

  fireEvent.click(screen.getByTestId("feedback-button"));

  await waitFor(() => {
    expect(props.updateBannerStatus).toBeCalledTimes(1);
    expect(props.updateBannerStatus.mock.calls[0][0]).toBe("");
    expect(props.updateMessage).not.toBeCalledTimes(1);
  });
});

test("Don't Submit if Server Responded with failure", async () => {
  props.message = "Some message";
  props.messageStatus = "error";

  server.use(
    rest.post(
      "https://portfolio-mailserver.herokuapp.com/mail",
      (req, res, ctx) => {
        sessionStorage.setItem("is-authenticated", "true");
        return res(ctx.json({ msg: "fail" }));
      }
    )
  );

  render(<Feedback {...props} />);

  fireEvent.click(screen.getByTestId("feedback-button"));

  await waitFor(() => {
    expect(props.updateBannerStatus).toBeCalledTimes(2);
    expect(props.updateBannerStatus.mock.calls[0][0]).toBe("neutral");
    expect(props.updateBannerStatus.mock.calls[1][0]).toBe("error");
    expect(props.updateMessage.mock.calls[0][0]).toBe("");
  });
});
