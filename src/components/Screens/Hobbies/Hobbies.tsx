import React from "react";
import { useTranslation } from "react-i18next";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";

function Hobbies() {
  const {
    profileData: { hobbies },
  } = useProfileDataContext();
  const { t } = useTranslation();
  return (
    <>
      <div className="section-title h2 bold">{t("hobbiesAndInterests")}</div>
      <div className="subsection">
        {hobbies.map((hobby, key) => {
          return (
            <div className="subsection-data" key={String(key)}>
              <span className="h3 grey1 bold">{hobby.name}</span>
              <div className="mt-2 grey-1 body-text">{hobby.summary}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SectionWrapper(Hobbies, constants.classNames.HOBBIES);
