import { css } from "styled-components";

const xs = css`
  padding: 0.35rem ${({ rounded }) => (rounded ? "0.35rem" : "0.75rem")};
  font-size: 0.75rem;
`;

const sm = css`
  padding: 0.5rem ${({ rounded }) => (rounded ? "0.5rem" : "1rem")};
  font-size: 0.875rem;
`;

const md = css`
  padding: 0.65rem ${({ rounded }) => (rounded ? "0.65rem" : "1.125rem")};
  font-size: 1rem;
`;

const lg = css`
  padding: 0.8rem ${({ rounded }) => (rounded ? "0.8rem" : "1.5rem")};
  font-size: 1.125rem;
`;

const size = {
  xs,
  sm,
  md,
  lg,
};

export default size;