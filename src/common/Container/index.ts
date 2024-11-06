import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  max-width: 1216px;
  margin: 119px auto 109px;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    margin: 64px auto 58px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin: 21px auto 31px;
  }
`;
