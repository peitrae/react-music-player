import styled, { css } from "styled-components";

const bgImage = css`
  background-image: linear-gradient(
    90deg,
    ${({ theme, value }) => `${theme.colors.grayscale[100]} ${value}%`},
    ${({ theme, value }) => `${theme.colors.grayscale[500]} ${value}%`}
  );
`;

const bgImageOnHover = css`
  background-image: linear-gradient(
    90deg,
    ${({ theme, value }) => `${theme.colors.white} ${value}%`},
    ${({ theme, value }) => `${theme.colors.grayscale[500]} ${value}%`}
  );
`;

const RangeInput = styled.input.attrs(
  ({ theme, onChange = () => {}, onMouseUp = () => {}, value = 0 }) => ({
    theme,
    type: "range",
    min: "1",
    max: "100",
    onChange,
    onMouseUp,
    value,
  })
)`
  appearance: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  /* Thumb Slider */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -5px;
  }

  /* Track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    border-radius: 0.25rem;
    ${bgImage}
  }

  &::-moz-range-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    border-radius: 0.25rem;
    ${bgImage}
  }

  &::-ms-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    border-color: transparent;
    color: transparent;
    ${bgImage}
  }

  &:hover {
    /* Thumb Slider */
    &::-webkit-slider-thumb {
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      background-color: ${({ theme }) => theme.colors.white};
    }

    &::-webkit-slider-runnable-track {
      ${bgImageOnHover}
    }

    &::-moz-range-track {
      ${bgImageOnHover}
    }

    &::-ms-track {
      ${bgImageOnHover}
    }
  }
`;

export default RangeInput;
