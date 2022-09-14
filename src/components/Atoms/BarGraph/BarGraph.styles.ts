import styled from "styled-components";

export const BarGraph = styled.div`
  background: var(--input-background);
  height: 2.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  transition: background-color 0.5s ease-in;
`;

export const Bar = styled.div`
  display: block;
  height: 2.25rem;
  background: linear-gradient(
    101.14deg,
    var(--orange) 0.99%,
    var(--red) 177.11%
  );
  border-radius: 0.25rem;
  cursor: pointer;
`;
