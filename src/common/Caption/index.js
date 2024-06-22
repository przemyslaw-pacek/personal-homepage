import styled, { css } from "styled-components";

export const Caption = styled.header`
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 16px;

    ${({ $toggleMode }) => $toggleMode && css`
        @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
            display: none;
        }
    `}
`;