import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 17px;
  }
`;
