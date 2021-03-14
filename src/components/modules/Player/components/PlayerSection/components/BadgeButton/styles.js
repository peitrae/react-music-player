import styled from "styled-components";

export const BadgeButtonWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  padding: 3px;
  color: ${({ theme }) => theme.colors.black[400]};
  background: ${({ theme }) => theme.colors.primary.default};
  border-radius: 999rem;
  font-size: 8px;
  font-weight: bold;
  right: 0;
  top: 0;
`;
