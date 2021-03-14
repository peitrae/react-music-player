import React from "react";

const PreviousIcon = ({ width = 14, height = 14 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.99583 10.872L18.5514 19.872C18.8528 20.046 19.2203 20.042 19.5178 19.864C19.8172 19.684 20 19.356 20 19L20 0.999998C20 0.643999 19.8172 0.316 19.5178 0.136C19.3661 0.0459996 19.1969 7.02053e-08 19.0278 8.49944e-08C18.8644 9.92734e-08 18.6992 0.0419999 18.5514 0.128L2.99583 9.12798C2.69055 9.30598 2.5 9.63798 2.5 9.99998C2.5 10.362 2.69055 10.694 2.99583 10.872Z" />
    <rect x="3" y="20" width="3" height="20" transform="rotate(180 3 20)" />
  </svg>
);

export default PreviousIcon;
