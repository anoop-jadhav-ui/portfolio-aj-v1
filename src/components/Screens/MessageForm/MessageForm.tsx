import React, { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import axiosInstance from "../../../helpers/axios";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import Banner, { BannerStatus } from "../../Atoms/Banner/Banner";
import Button from "../../Atoms/Button/Button";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./MessageForm.scss";

const MessageForm = () => {
  const [message, updateMessage] = useState<string>("");
  const [name, updateName] = useState<string>("");

  const [bannerStatus, updateBannerStatus] = useState<BannerStatus>("neutral");
  const [showBanner, setShowBanner] = useState(false);

  const {
    profileData: { contactDetails },
  } = useProfileDataContext();

  const { emailId } = contactDetails;

  const getBannerMessage = {
    success: T.MESSAGE_SENT_SUCCESS,
    error: T.SORRY_COULDNT_SEND_MSG,
    neutral: T.SENDING_MESSAGE,
  };

  function onMessageInputChange(e: React.FormEvent<HTMLTextAreaElement>) {
    updateMessage((e.target as HTMLTextAreaElement).value);
  }
  function onNameInputChange(e: React.FormEvent<HTMLInputElement>) {
    updateName((e.target as HTMLInputElement).value);
  }

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message) {
      try {
        setShowBanner(true);
        updateBannerStatus("neutral");
        const response = await axiosInstance.post("/mail", {
          userEmail: emailId,
          userMessage: message,
          userName: name,
        });

        if (response.data.msg === "success") {
          updateBannerStatus("success");

          updateMessage("");
          updateName("");
        } else if (response.data.msg === "fail") {
          updateBannerStatus("error");
        }
      } catch (e: unknown) {
        updateBannerStatus("error");
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
      <div className="section-title h2 bold">{T.MESSAGE_FORM_TITLE}</div>
      <form
        id="contact-form"
        className="subsection message-content"
        onSubmit={(event) => sendEmail(event)}
        method="POST"
      >
        <div className="subsection-data">
          <p className="subsection-title body-text">
            {T.MESSAGE_FORM_SUBTITLE}
          </p>
          <div className="primary-color body-text">
            <input
              id="name"
              value={name}
              placeholder="Your Name"
              name="name"
              onChange={onNameInputChange}
              required
            />
            <textarea
              id="message-box"
              value={message}
              className=""
              placeholder="Your Message"
              name="message"
              onChange={onMessageInputChange}
              required
            />
          </div>

          <Button
            className={
              bannerStatus === "neutral" && showBanner ? "loading" : ""
            }
            type="submit"
            label={T.SEND}
            Icon={
              bannerStatus === "neutral" && showBanner
                ? AiOutlineLoading3Quarters
                : RiMailSendLine
            }
          />
        </div>
      </form>
    </>
  );
};

export default SectionWrapper(MessageForm, constants.classNames.MESSAGE_FORM);
