import React, { Suspense } from "react";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Skills3D.scss";
import { Loader } from "@react-three/drei";

const BlenderModel = React.lazy(
  () => import("../../Atoms/3DModels/BlenderModel")
);
const FigmaModel = React.lazy(() => import("../../Atoms/3DModels/FigmaModel"));
const ReactModel = React.lazy(() => import("../../Atoms/3DModels/ReactModel"));
const HtmlModel = React.lazy(() => import("../../Atoms/3DModels/HtmlModel"));
const JsModel = React.lazy(() => import("../../Atoms/3DModels/JsModel"));
const CSSModel = React.lazy(() => import("../../Atoms/3DModels/CSSModel"));

const Skills3D = () => {
  const {
    profileData: { skills },
  } = useProfileDataContext();
  const { development, design } = skills;
  return (
    <>
      <div className="section-title h2 bold">{T.SKILLS}</div>
      <div className="subsection skills-content">
        <div className="skills-3d-grid">
          <Suspense fallback={<Loader />}>
            <HtmlModel scale={1.5} />
            <JsModel scale={1.5} />
            <CSSModel scale={1.5} />
            <ReactModel scale={0.5} />
            <FigmaModel scale={0.65} />
            <BlenderModel scale={1} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SectionVisibilityHOC(Skills3D, constants.classNames.SKILLS);
