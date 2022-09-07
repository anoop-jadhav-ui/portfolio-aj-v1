import React from "react";
import "./Certifications.css";
import { useGlobalContext } from "../../context/GlobalContext";
import { CertificateDetails } from "../../Types/profileDataTypes";

const Certifications = () => {
  const { profileData } = useGlobalContext();
  const { certifications } = profileData;
  const { development, design } = certifications;
  return (
    <div className={"col-md-7 page-1 text-left section certifications"}>
      <div className="section-title h2 bold">Certifications</div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Development
        </div>

        {development.map(
          (certificateDetail: CertificateDetails, key: number) => {
            return (
              <div className="subsection-data" key={key}>
                <span className="h3 grey1 bold" data-testid="name">
                  {certificateDetail.name}
                </span>
                <div className="red default-text mt-1">
                  <a
                    href={certificateDetail.urlToCertificate}
                    target="_Blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn profile
                  </a>
                </div>
                <div className="mt-2 grey-1 body-text">
                  {certificateDetail.summary}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="subsection">
        <div className="subsection-title uppercase body-text grey3 letterspacing-1">
          Design
        </div>
        {design.map((certificateDetail: CertificateDetails, key: number) => {
          return (
            <div className="subsection-data" key={key}>
              <span className="h3 grey1 bold">{certificateDetail.name}</span>
              <div className="red default-text mt-1">
                <a
                  href={certificateDetail.urlToCertificate}
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn profile
                </a>
              </div>
              <div className="mt-2 grey-1 body-text">
                {certificateDetail.summary}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;

export { Certifications };
