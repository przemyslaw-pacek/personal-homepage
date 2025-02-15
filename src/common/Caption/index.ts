import styled, { css } from "styled-components";

export const Caption = styled.p<{
  $toggleMode?: boolean;
}>`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 1.4;
  margin: 0;

  ${({ $toggleMode }) =>
    $toggleMode &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        display: none;
      }
    `}
`;
