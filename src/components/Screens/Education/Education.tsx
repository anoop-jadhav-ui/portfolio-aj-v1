import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import "./Education.styles";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";
import * as C from "../../StyledComponents/commonStyledComp.styles";

function Education() {
  const { profileData } = useGlobalContext();
  const { education } = profileData;
  return (
    <>
      <C.SectionTitle>{T.EDUCATION}</C.SectionTitle>
      <C.SubSection>
        {education.map((educationDetail, key) => {
          return (
            <div className="subsection-wrappers" key={key}>
              <C.SubSectionTitle className="mt-2">
                {educationDetail.type}
              </C.SubSectionTitle>
              <C.SubSectionData>
                <span className="h3 grey1 bold">
                  {educationDetail.institute}
                </span>
                <span className="h3 grey3 light">
                  , {educationDetail.place}
                </span>
                <div className="education-bars">
                  <BarGraph value={educationDetail.percentage} />
                </div>
              </C.SubSectionData>
            </div>
          );
        })}
      </C.SubSection>
    </>
  );
}
export default SectionVisibilityHOC(Education, "education");
