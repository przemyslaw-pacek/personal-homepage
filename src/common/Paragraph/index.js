import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        line-height: 26px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 17px;
        line-height: 24px;
    }
`;