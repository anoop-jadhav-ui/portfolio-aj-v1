import React from "react";
import "./Hobbies.css";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../SectionVisibilityHOC/SectionVisibilityHOC";
function Hobbies() {
  const { profileData } = useGlobalContext();
  const { hobbies } = profileData;
  return (
    <>
      <div className="section-title h2 bold">Hobbies & Interests</div>
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

export default SectionVisibilityHOC(Hobbies, "hobbies-interests");
