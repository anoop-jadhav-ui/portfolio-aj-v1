import React from "react";
import "./Hobbies.scss";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import constants from "../../../helpers/constants";
function Hobbies() {
  const { profileData } = useGlobalContext();
  const { hobbies } = profileData;
  return (
    <>
      <div className="section-title h2 bold">{T.HOBBIES_AND_INTERESTS}</div>
      <div className="subsection">
        {hobbies.map((hobby, key) => {
          return (
            <div className="subsection-data" key={key}>
              <span className="h3 grey1 bold">{hobby.name}</span>
              <div className="mt-2 grey-1 body-text">{hobby.summary}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SectionVisibilityHOC(Hobbies, constants.classNames.HOBBIES);
