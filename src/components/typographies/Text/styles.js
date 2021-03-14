import styled from "styled-components";

const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
};

const fontWeight = {
  regular: 400,
  bold: 700,
};

const Text = styled.span`
  color: #ffffff;
  font-size: ${({ size = "md" }) => fontSize[size]};
  font-weight: ${({ weight = "regular" }) => fontWeight[weight]};
`;

export default Text;
