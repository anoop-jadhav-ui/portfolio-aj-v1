import React from "react";
import { useTranslation } from "react-i18next";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";

function Education() {
  const {
    profileData: { education },
  } = useProfileDataContext();
  const { t } = useTranslation();

  return (
    <>
      <div className="section-title h2 bold">{t("education")}</div>
      <div className="subsection education-content">
        {education.map((educationDetail, key) => {
          return (
            <div className="subsection-wrappers" key={String(key)}>
              <div className="subsection-title uppercase body-text grey5 letterspacing-1">
                {educationDetail.type}
              </div>
              <div className="subsection-data">
                <span className="h3 grey1 bold">
                  {educationDetail.institute}
                </span>
                <span className="h3 grey5 light">
                  , {educationDetail.place}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SectionWrapper(Education, constants.classNames.EDUCATION);
