import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayscale[500]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Page;