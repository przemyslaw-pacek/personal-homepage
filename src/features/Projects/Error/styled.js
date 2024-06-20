import styled, { css } from "styled-components";
import { ReactComponent as danger } from "./danger.svg";

export const Wrapper = styled.div`
    text-align: center;
    margin: 88px 0 140px;
    color: ${({ theme }) => theme.colors.mineShaft};
    transition: color 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 60px 0 102px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin: 40px 0 70px;
    }
`;

export const DangerIcon = styled(danger)`
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 40px;
        height: 40px;
    }
`;

export const Attention = styled.h3`
    font-size: 24px;
    line-height: 30px;
    margin: 16px 0 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        margin: 12px 0 24px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 17px;
        line-height: 24px;
    }
`;