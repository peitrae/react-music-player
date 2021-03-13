import styled from "styled-components";

export const Card = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grayscale[400]};
  width: 14rem;
  min-height: 12.5rem;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export default Card;
