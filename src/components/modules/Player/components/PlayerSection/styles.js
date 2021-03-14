import styled from "styled-components";

import Button from "../../../../inputs/Button";
import RangeInput from "../../../../inputs/RangeInput";

export const ToggleExpandButton = styled(Button).attrs(() => ({
  variant: "solid",
  color: "black",
  size: "xs",
  rounded: true,
}))`
  margin: 0 0 0.25rem auto;
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Progress = styled(RangeInput)`
  margin-top: 0.5rem;
  width: 100%;
`;
