import styled from "styled-components";

export const ProjectList = styled.section`
  margin: 24px 0 120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    margin-bottom: 96px;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-bottom: 72px;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin-bottom: 40px;
    gap: 16px;
  }
`;
