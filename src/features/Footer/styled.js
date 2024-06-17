import styled, { css, keyframes } from "styled-components";
import { ReactComponent as github } from "../../common/data/github.svg";
import { ReactComponent as facebook } from "./facebook.svg";
import { ReactComponent as linkedIN } from "./linkedIN.svg";
import { ReactComponent as instagram } from "./instagram.svg";

const jump = keyframes`
    33% { transform: translateY(-5px); }
    66% { transform: translateY(5px); }
`;

export const Wrapper = styled.footer`
    color: ${({ theme }) => theme.colors.mineShaft};
    max-width: 691px;
    transition: color 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Caption = styled.div`
    color: ${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    letter-spacing: 0;
    line-height: 16px;
    margin-bottom: 24px;
    transition: color 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin-bottom: 12px;
    }
`;

export const Mail = styled.a`
    color: inherit;
    display: block;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    font-size: 32px;
    line-height: 39px;
    transition: 0.3s linear;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.white};
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.scienceBlue};
        animation: ${jump} 0.3s;

        ${({ $dark }) => $dark && css`
            color: ${({ theme }) => theme.colors.dodgerBlue};
        `}
    }

    &:active {
        color: inherit;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 26px;
        line-height: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Info = styled.div`
    font-size: 18px;
    line-height: 25px;
    margin: 24px 0 56px;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 16px;
        line-height: 24px;
        margin: 18px 0 48px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {        
        font-size: 14px;
        line-height: 17px;
        margin: 12px 0 40px;
    }
`;

export const Icons = styled.ul`
    display: flex;
    gap: 24px;
    padding: 0;   
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        gap: 21px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        gap: 18px;
    }
`;

export const IconLink = styled.a`
    color: inherit;
    display: flex;
    transition: 0.3s linear;
    
    &:hover {
        color: ${({ theme }) => theme.colors.scienceBlue};
        animation: ${jump} 0.3s;
        
        ${({ $dark }) => $dark && css`
            color: ${({ theme }) => theme.colors.dodgerBlue};
        `}
    }

    &:active {
        color: inherit;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        width: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 32px;
    }
`;

export const IconGithub = styled(github)`
`;

export const IconFB = styled(facebook)`
`;

export const IconLinkedIN = styled(linkedIN)`
`;

export const IconInstagram = styled(instagram)`
`;