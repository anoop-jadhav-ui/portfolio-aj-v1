import React, { ChangeEventHandler, FormEvent, useState } from "react";
import axiosInstance from "../../../helpers/axios";
import Banner from "../../Atoms/Banner/Banner";

const Feedback = () => {
  const [message, updateMessage] = useState<string>();
  const [bannerStatus, updateBannerStatus] = useState<string>();

  const handleChange: ChangeEventHandler<Element> = (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    updateMessage(event.target.value);
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (message) {
        updateBannerStatus("neutral");
        const response = await axiosInstance.post("/mail", {
          userEmail: "anoopjadhav@gmail.com",
          userMessage: "Message : " + message,
        });

        if (response.data.msg === "success") {
          updateBannerStatus("success");
          updateMessage("");
        } else if (response.data.msg === "fail") {
          throw new Error("Response Error");
        }
      } else {
        updateBannerStatus("");
      }
    } catch (e) {
      updateBannerStatus("");
    }
  };

  const showBanner = () => {
    let errMessage;
    switch (bannerStatus) {
      case "success":
        errMessage = "Thank you for your feedback";
        break;
      case "error":
        errMessage =
          "Sorry Couldn't send your message. Please try again later.";
        break;
      case "neutral":
        errMessage = "Submitting your feedback...";
        break;
      default:
        errMessage = "";
        break;
    }

    return (
      errMessage !== "" && (
        <Banner
          data-testid="banner"
          type={bannerStatus}
          text={errMessage}
          closeBanner={() => updateBannerStatus("")}
        />
      )
    );
  };

  return (
    <>
      {showBanner()}
      <div className="col-md-7 page-1 text-left section feedback ">
        <div className="section-title h2 bold">Feedback</div>
        <form
          id="contact-form"
          className="subsection"
          onSubmit={(event) => sendEmail(event)}
          method="POST"
        >
          <div className="subsection-data">
            <label
              htmlFor="feedback-box"
              className="subsection-title body-text letterspacing-1"
            >
              Please provide a constructive feedback.
            </label>
            <div className="red body-text mt-2">
              <textarea
                id="feedback-box"
                data-testid="feedback-box"
                className=""
                name="message"
                value={message}
                placeholder={message}
                onChange={handleChange}
              />
            </div>
            <div className="text-left mt-3">
              <button type="submit" data-testid="feedback-button">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
