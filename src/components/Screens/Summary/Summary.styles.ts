import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
    0% {
    width: 20rem;
    height: 20rem;
    border: 2px solid var(--red);
    }
    100% {
    width: 24rem;
    height: 24rem;
    border: 2px solid transparent;
    }`;

export const MainLogoWrapper = styled.div`
  position: relative;
  box-sizing: content-box;

  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: ${borderAnimation} 6s infinite linear;
  }
  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: ${borderAnimation} 6s infinite 3s linear;
  }
`;

export const MainLogo = styled.img`
  opacity: 0;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  position: relative;

  &[data-loaded="true"] {
    opacity: 1;
  }
`;
