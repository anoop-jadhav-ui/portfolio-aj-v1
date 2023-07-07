import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import constants from "../../../helpers/constants";
import SectionVisibilityHOC from "../../Organisms/SectionWrapper/SectionWrapper";
import "./Skills3D.scss";

const HtmlModel = React.lazy(() => import("../../Atoms/3DModels/HtmlModel"));
const CSSModel = React.lazy(() => import("../../Atoms/3DModels/CSSModel"));
const JsModel = React.lazy(() => import("../../Atoms/3DModels/JsModel"));
const ReactModel = React.lazy(() => import("../../Atoms/3DModels/ReactModel"));
const FigmaModel = React.lazy(() => import("../../Atoms/3DModels/FigmaModel"));
const BlenderModel = React.lazy(
  () => import("../../Atoms/3DModels/BlenderModel")
);

const Skills3D = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="section-title h2 bold">{t("skills")}</div>
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
