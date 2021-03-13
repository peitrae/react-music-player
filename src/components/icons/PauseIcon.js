import React from "react";

const PauseIcon = ({ width = 18, height = 18 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="3" height="20" rx="1" fill="white" />
    <rect x="9" width="3" height="20" rx="1" fill="white" />
  </svg>
);

export default PauseIcon;
