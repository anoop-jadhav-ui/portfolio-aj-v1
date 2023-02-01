import React from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
function Hobbies() {
  const { profileData } = useGlobalContext();
  const { hobbies } = profileData;
  return (
    <>
      <div className="section-title h2 bold">{T.HOBBIES_AND_INTERESTS}</div>
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
