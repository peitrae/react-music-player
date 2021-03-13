import styled from "styled-components";

import Button from "../../../../../../inputs/Button";

export const AlbumWrapper = styled.div`
  height: ${({ isExpand }) => (isExpand ? "12rem" : 0)};
  margin-bottom: ${({ isExpand }) => (isExpand ? "0.75rem" : 0)};
  position: relative;
  transition: height 0.15s ease-in-out;
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const ToggleCollapseButton = styled(Button).attrs(() => ({
  variant: "solid",
  color: "black",
  size: "xs",
  rounded: true,
}))`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
