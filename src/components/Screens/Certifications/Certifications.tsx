import React from "react";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import { CertificateDetails } from "../../../types/profileDataTypes";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Certifications.scss";

const Certifications = () => {
  const {
    profileData: { certifications },
  } = useProfileDataContext();
  const { development, design } = certifications;
  return (
    <>
      <div className="section-title h2 bold">{T.CERTIFICATIONS}</div>
      <div className="subsection certifications-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DEVELOPMENT}
        </div>

        {development.map(
          (certificateDetail: CertificateDetails, key: number) => {
            return (
              <div className="subsection-data" key={String(key)}>
                <span className="h3 grey1 bold" data-testid="name">
                  {certificateDetail.name}
                </span>
                <div className="primary-color default-text">
                  <a
                    href={certificateDetail.urlToCertificate}
                    target="_Blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn profile
                  </a>
                </div>
                <div className="grey-1 body-text summary-text">
                  {certificateDetail.summary}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="subsection certifications-content">
        <div className="subsection-title uppercase body-text grey5 letterspacing-1">
          {T.DESIGN}
        </div>
        {design.map((certificateDetail: CertificateDetails, key: number) => {
          return (
            <div className="subsection-data" key={String(key)}>
              <span className="h3 grey1 bold">{certificateDetail.name}</span>
              <div className="primary-color default-text">
                <a
                  href={certificateDetail.urlToCertificate}
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  {T.VIEW_LINKEDIN_PROFILE}
                </a>
              </div>
              <div className="grey-1 body-text summary-text">
                {certificateDetail.summary}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(
  Certifications,
  constants.classNames.CERTIFICATIONS
);
