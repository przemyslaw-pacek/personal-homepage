import styled from "styled-components";

export const Caption = styled.div`
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 16px;
`;