import React from "react";

import { AlbumWrapper, AlbumImage, ToggleCollapseButton } from "./styles";
import ArrowIcon from "../../../../../../icons/ArrowIcon";

const Album = ({ isExpand, img, toggleExpandHandler }) => (
  <AlbumWrapper isExpand={isExpand}>
    <AlbumImage src={img} alt="album" />
    {isExpand && (
      <ToggleCollapseButton onClick={toggleExpandHandler}>
        <ArrowIcon />
      </ToggleCollapseButton>
    )}
  </AlbumWrapper>
);

export default Album;
