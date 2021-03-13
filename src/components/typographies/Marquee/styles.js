import styled, { keyframes } from "styled-components";

import Text from "../Text";

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }  
`;

export const MarqueeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 24px;
`;

export const MarqueeText = styled(Text)`
  white-space: nowrap;
  position: absolute;
  max-width: 100%;
  height: 100%;
  font-weight: bold;
  transform: translateX(0);
  animation: ${({ isAnimationPlaying }) => isAnimationPlaying && marquee} 4s
    linear;
`;
