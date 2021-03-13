import React from "react";

import Marquee from "../../../../../../typographies/Marquee";
import { TitleStatic } from "./styles";

const Title = ({ children }) =>
  children.length > 23 ? (
    <Marquee>{children}</Marquee>
  ) : (
    <TitleStatic>{children}</TitleStatic>
  );

export default Title;
