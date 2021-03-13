import React from "react";

import Button from "../../../../../../inputs/Button";

const ControlButton = ({ children, variant, size, onClick }) => (
  <Button
    variant={variant || "text"}
    size={size || "xs"}
    color="white"
    rounded={true}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default ControlButton;
