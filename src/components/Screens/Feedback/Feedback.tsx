import React, { FormEvent, useState } from "react";
import axiosInstance from "../../../helpers/axios";
import Banner, { BannerStatus } from "../../Atoms/Banner/Banner";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import Button from "../../Atoms/Button/Button";
import { RiMailSendLine } from "react-icons/ri";
import { useGlobalContext } from "../../../context/GlobalContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Feedback.scss";
import constants from "../../../helpers/constants";
const Feedback = () => {
  const [message, updateMessage] = useState<string>();
  const [bannerStatus, updateBannerStatus] = useState<BannerStatus>("neutral");
  const [showBanner, setShowBanner] = useState(false);

  const { profileData } = useGlobalContext();
  const { contactDetails } = profileData;
  const { emailId } = contactDetails;

  const getBannerMessage = {
    success: T.THANK_YOU_FOR_FEEDBACK,
    error: T.SORRY_COULDNT_SEND_MSG,
    neutral: T.SUBMITTING_FEEDBACK,
  };

  function onFeedbackInputChange(e: React.FormEvent<HTMLTextAreaElement>) {
    updateMessage((e.target as HTMLTextAreaElement).value);
  }

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message) {
      try {
        setShowBanner(true);
        updateBannerStatus("neutral");
        const response = await axiosInstance.post("/mail", {
          userEmail: emailId,
          userMessage: `Message : ${message}`,
        });

        if (response.data.msg === "success") {
          updateBannerStatus("success");
        } else if (response.data.msg === "fail") {
          updateBannerStatus("error");
        }
        updateMessage("");
      } catch (e: unknown) {
        updateMessage("");
        updateBannerStatus("error");
        console.error((e as DOMException).message as unknown as string);
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
          <div className="primary-color body-text mt-2">
            <textarea
              id="feedback-box"
              data-testid="feedback-box"
              className=""
              name="message"
              value={message}
              placeholder={message}
              onChange={onFeedbackInputChange}
            />
          </div>
          <div className="text-left mt-3">
            <Button
              className={
                bannerStatus === "neutral" && showBanner ? "loading" : ""
              }
              type="submit"
              testID="feedback-button"
              label={T.SEND}
              Icon={
                bannerStatus === "neutral" && showBanner
                  ? AiOutlineLoading3Quarters
                  : RiMailSendLine
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SectionVisibilityHOC(Feedback, constants.classNames.FEEDBACK);
