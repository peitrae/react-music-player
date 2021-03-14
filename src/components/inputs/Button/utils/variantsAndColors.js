import { css } from "styled-components";

const textWhite = css`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale[100]};
  }
`;

const textPrimary = css`
  color: ${({ theme }) => theme.colors.primary.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

const outlinedWhite = css`
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.grayscale[100]};
    color: ${({ theme }) => theme.colors.grayscale[100]};
  }
`;

const solid = css`
  color: ${({ theme }) => theme.colors.white};
  transition: background 0.1s ease-out;
`;

const solidBlack = css`
  ${solid}
  background-color: ${({ theme }) => theme.colors.grayscale[200]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale[300]};
  }
`;

const solidPrimary = css`
  ${solid}
  background-color: ${({ theme }) => theme.colors.primary.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.default};
  }
`;

const buttonVariantsAndColors = {
  solid: {
    primary: solidPrimary,
    black: solidBlack,
  },
  outlined: {
    white: outlinedWhite,
  },
  text: {
    primary: textPrimary,
    white: textWhite,
  },
};

export default buttonVariantsAndColors