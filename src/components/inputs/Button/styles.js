import styled from "styled-components";

import buttonSize from "./utils/size";
import buttonVariantsAndColors from "./utils/variantsAndColors";

const Button = styled.button.attrs(({ rounded, variant, color, size }) => ({
  rounded,
  variant: variant || "solid",
  color: color || "primary",
  size: size || "md",
}))`
  ${({ size }) => buttonSize[size]};
  ${({ variant, color }) => buttonVariantsAndColors[variant][color]}
  border-radius: 999rem;

  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
