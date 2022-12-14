import { useGlobalContext } from "../../../context/GlobalContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import "./Education.scss";
import React from "react";
function Education() {
  const { profileData, currentSectionInView } = useGlobalContext();
  const { education } = profileData;

  return (
    <>
      <div className="section-title h2 bold">{T.EDUCATION}</div>
      <div className="subsection">
        {education.map((educationDetail, key) => {
          return (
            <div className="subsection-wrappers" key={String(key)}>
              <div className="subsection-title uppercase body-text grey5 letterspacing-1 mt-2">
                {educationDetail.type}
              </div>
              <div className="subsection-data">
                <span className="h3 grey1 bold">
                  {educationDetail.institute}
                </span>
                <span className="h3 grey5 light">
                  , {educationDetail.place}
                </span>
                {/* <div className="education-bars">*/}
                {/*  <BarGraph value={educationDetail.percentage} animate={true} />*/}
                {/* </div>*/}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SectionVisibilityHOC(Education, constants.classNames.EDUCATION);
