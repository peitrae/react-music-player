import React, { useState } from "react";

import { MarqueeWrapper, MarqueeText } from "./styles";

const Marquee = ({ children }) => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const startAnimation = () => setIsAnimationPlaying(true);

  const stopAnimation = () => setIsAnimationPlaying(false);

  return (
    <MarqueeWrapper>
      <MarqueeText
        isAnimationPlaying={isAnimationPlaying}
        onMouseEnter={startAnimation}
        onAnimationEnd={stopAnimation}
      >
        {children}
      </MarqueeText>
    </MarqueeWrapper>
  );
};

export default Marquee;
