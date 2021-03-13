import React from "react";

const PlayIcon = ({ width = 18, height = 18 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g mask="url(#mask0)">
      <path d="M21.4921 9.12802L5.55797 0.128038C5.24924 -0.0459616 4.8728 -0.0419616 4.56806 0.136038C4.26132 0.316038 4.0741 0.644037 4.0741 1.00004V19C4.0741 19.356 4.26132 19.684 4.56806 19.864C4.72341 19.954 4.8967 20 5.06998 20C5.23729 20 5.40659 19.958 5.55797 19.872L21.4921 10.872C21.8048 10.694 22 10.362 22 10C22 9.63802 21.8048 9.30602 21.4921 9.12802Z" />
    </g>
  </svg>
);

export default PlayIcon;
