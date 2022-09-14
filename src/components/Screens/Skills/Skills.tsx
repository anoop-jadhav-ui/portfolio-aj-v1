import React from "react";
import BarGraph from "../../Atoms/BarGraph/BarGraph";
import { useGlobalContext } from "../../../context/GlobalContext";
import SectionVisibilityHOC from "../../Organisms/SectionVisibilityHOC/SectionVisibilityHOC";
import T from "../../../translations/en_IN";

import * as C from "../../StyledComponents/commonStyledComp.styles";
import * as S from "./Skills.styles";

const Skills = () => {
  const { profileData } = useGlobalContext();
  const { skills } = profileData;
  const { development, design } = skills;
  return (
    <>
      <C.SectionTitle>{T.SKILLS}</C.SectionTitle>
      <C.SubSection>
        <C.SubSectionTitle>{T.DEVELOPMENT}</C.SubSectionTitle>
        <C.SubSectionData>
          {development.map((skill, key) => {
            return (
              <S.SkillBarWrapper key={key}>
                <S.SkillLabel>{skill.skillName}</S.SkillLabel>
                <BarGraph value={skill.skillValue} />
              </S.SkillBarWrapper>
            );
          })}
        </C.SubSectionData>
      </C.SubSection>
      <C.SubSection>
        <C.SubSectionTitle>{T.DESIGN}</C.SubSectionTitle>
        <C.SubSectionData>
          {design.map((skill, key) => {
            return (
              <S.SkillBarWrapper key={key}>
                <S.SkillLabel>{skill.skillName}</S.SkillLabel>
                <BarGraph value={skill.skillValue} />
              </S.SkillBarWrapper>
            );
          })}
        </C.SubSectionData>
      </C.SubSection>
    </>
  );
};

export default SectionVisibilityHOC(Skills, "skills");
