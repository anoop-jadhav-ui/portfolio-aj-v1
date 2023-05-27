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

  return (
    <>
      <div className="section-title h2 bold">{T.CERTIFICATIONS}</div>
      <div className="subsection certifications-content">
        {certifications.map(
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
                    View Certification
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
    </>
  );
};

export default SectionWrapper(
  Certifications,
  constants.classNames.CERTIFICATIONS
);
