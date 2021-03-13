import React from "react";

import { BadgeButtonWrapper, Badge } from "./styles";
import Button from "../../../../../../inputs/Button";

const BadgeButton = ({ children, badge, isActive, onClick }) => (
  <BadgeButtonWrapper>
    {badge && <Badge>{badge}</Badge>}
    <Button
      variant="text"
      size="xs"
      color={isActive ? "primary" : "white"}
      rounded={true}
      onClick={onClick}
    >
      {children}
    </Button>
  </BadgeButtonWrapper>
);

export default BadgeButton;
