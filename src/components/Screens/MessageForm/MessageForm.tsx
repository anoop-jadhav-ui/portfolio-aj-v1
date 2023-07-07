import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import axiosInstance from "../../../helpers/axios";
import constants from "../../../helpers/constants";
import Banner, { BannerStatus } from "../../Atoms/Banner/Banner";
import Button from "../../Atoms/Button/Button";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./MessageForm.scss";

type MessageFormType = {
  name: string;
  email: string;
  message: string;
};

const defaultMessageFormState: MessageFormType = {
  name: "",
  email: "",
  message: "",
};

const MessageForm = () => {
  const methods = useForm<MessageFormType>({
    defaultValues: defaultMessageFormState,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const { t } = useTranslation();

  const [bannerStatus, updateBannerStatus] = useState<BannerStatus>("neutral");
  const [showBanner, setShowBanner] = useState(false);

  const getBannerMessage = {
    success: t("messageSentSuccess"),
    error: t("sorryCouldntSendMsg"),
    neutral: t("sendingMessage"),
  };

  const successHandler: SubmitHandler<MessageFormType> = async (data) => {
    const { name, email, message } = data;
    try {
      setShowBanner(true);
      updateBannerStatus("neutral");
      const response = await axiosInstance.post("/mail", {
        email: email,
        message: message,
        name: name,
      });

      if (response.data.msg === "success") {
        updateBannerStatus("success");
        reset();
      } else if (response.data.msg === "fail") {
        updateBannerStatus("error");
      }
    } catch (e: unknown) {
      updateBannerStatus("error");
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
            updateBannerStatus("neutral");
            setShowBanner(false);
          }}
        />
      )}
      <div className="section-title h2 bold">{t("messageFormTitle")}</div>
      <form
        id="contact-form"
        className="subsection message-content"
        onSubmit={handleSubmit(successHandler)}
        noValidate
      >
        <div className="subsection-data">
          <p className="subsection-title body-text">
            {t("messageFormSubtitle")}
          </p>
          <div className="primary-color body-text form-wrapper">
            <div className="input-form-control">
              <label htmlFor="name">Full Name</label>
              <input
                {...register("name", {
                  required: "Please enter your full name",
                })}
                placeholder="John Doe"
                name="name"
                id="name"
                className={errors.name ? "highlight-error" : ""}
              />
              {errors.name && (
                <span className="error-message-label">
                  {errors.name?.message}
                </span>
              )}
            </div>
            <div className="input-form-control">
              <label htmlFor="email">Email Address</label>
              <input
                {...register("email", {
                  required: "Please enter your email address",
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 ||
                      "Email should have at most 50 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
                placeholder="johndoe@gmail.com"
                name="email"
                type="email"
                id="email"
                className={errors.email ? "highlight-error" : ""}
              />
              {errors.email && (
                <span className="error-message-label">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="input-form-control">
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", {
                  required: "Please enter your message",
                })}
                placeholder="Tell me more about your project needs and timeline."
                name="message"
                className={errors.message ? "highlight-error" : ""}
              />
              {errors.message && (
                <span className="error-message-label">
                  {errors.message?.message}
                </span>
              )}
            </div>
          </div>

          <Button
            className={
              bannerStatus === "neutral" && showBanner ? "loading" : ""
            }
            type="submit"
            label={t("send")}
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
