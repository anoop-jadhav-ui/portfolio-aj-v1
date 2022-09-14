import React, { ChangeEventHandler, FormEvent, useState } from "react";
import axiosInstance from "../../../helpers/axios";
import Banner, { BannerStatus } from "../../Atoms/Banner/Banner";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import Button from "../../Atoms/Button/Button";
import { RiMailSendLine } from "react-icons/ri";

const Feedback = () => {
  const [message, updateMessage] = useState<string>();
  const [bannerStatus, updateBannerStatus] = useState<BannerStatus>("neutral");
  const [showBanner, setShowBanner] = useState(false);

  const getBannerMessage = {
    success: "Thank you for your feedback",
    error: "Sorry Couldn't send your message. Please try again later.",
    neutral: "Submitting your feedback...",
  };

  const handleChange: ChangeEventHandler<Element> = (event) => {
    // @ts-ignore
    updateMessage(event.target.value);
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message) {
      try {
        setShowBanner(true);
        updateBannerStatus("neutral");
        const response = await axiosInstance.post("/mail", {
          userEmail: "anoopjadhav@gmail.com",
          userMessage: "Message : " + message,
        });

        if (response.data.msg === "success") {
          updateBannerStatus("success");
        } else if (response.data.msg === "fail") {
          updateBannerStatus("error");
        }
        updateMessage("");
      } catch (e: any) {
        updateMessage("");
        updateBannerStatus("error");
        console.error(e.message as unknown as string);
      }
    }
  };

  return (
    <>
      {showBanner && (
        <Banner
          data-testid="banner"
          type={bannerStatus}
          text={getBannerMessage[bannerStatus]}
          closeBanner={() => {
            updateMessage("");
            updateBannerStatus("neutral");
            setShowBanner(false);
          }}
        />
      )}
      <div className="section-title h2 bold">{T.FEEDBACK}</div>
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
            {T.FEEDBACK_MESSAGE}
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
            <Button
              type="submit"
              testID="feedback-button"
              label={T.SEND}
              Icon={RiMailSendLine}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SectionVisibilityHOC(Feedback, "feedback");
