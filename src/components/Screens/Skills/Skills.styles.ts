import styled from "styled-components";

export const SkillLabel = styled.div`
  font-weight: bold;
  color: var(--grey1);
  font-size: 1rem;
  width: 20%;
`;

export const SkillBarWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  & + & {
    margin-top: 2rem;
  }
`;
