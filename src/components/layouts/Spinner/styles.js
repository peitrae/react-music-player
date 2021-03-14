import styled, { keyframes } from "styled-components";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
  }
  background: inherit;
  color: ${({ theme }) => theme.colors.primary.default};
  font-size: 4px;
  text-indent: -99999em;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);

  &:before,
  &:after {
    position: absolute;
    content: "";
  }

  &:before {
    width: 5.5em;
    height: 10.5em;
    background: inherit;
    border-radius: 10.5em 0 0 10.5em;
    top: -0.15em;
    left: -0.15em;
    transform-origin: 5.1em 5.1em;
    animation: ${spinning} 2s infinite ease 1.5s;
  }

  &:after {
    width: 5.5em;
    height: 10.3em;
    background: inherit;
    border-radius: 0 10.5em 10.5em 0;
    top: -0.15em;
    left: 4.9em;
    transform-origin: 0.1em 5.1em;
    animation: ${spinning} 2s infinite ease;
  }
`;

export default Spinner;
