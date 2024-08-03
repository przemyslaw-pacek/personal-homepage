import styled, { css, keyframes } from "styled-components";
import { ReactComponent as hand } from "./hand.svg";
import { ReactComponent as github } from "./github.svg";
import { ReactComponent as facebook } from "./facebook.svg";
import { ReactComponent as linkedIN } from "./linkedIN.svg";
import { ReactComponent as instagram } from "./instagram.svg";

const jump = keyframes`
    33% { transform: translateY(-5px); }
    66% { transform: translateY(5px); }
`;

export const Wrapper = styled.footer`
    max-width: 691px;
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.colors.headerText};
`;

const links = css`
    color: inherit;
    transition: 0.3s linear;
    
    &:hover {
        color: ${({ theme }) => theme.colors.blue};
        animation: ${jump} 0.3s;
    }

    &:active {
        color: inherit;
    }
`;

export const Mail = styled.a`
    ${links}
    display: block;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    font-size: 32px;
    line-height: 39px;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 26px;
        line-height: 30px;
        margin-top: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 18px;
        line-height: 22px;
        margin-top: 12px;
    }
`;

export const Info = styled.div`
    max-width: 670px;
    font-size: 18px;
    line-height: 25px;
    margin: 24px 0 56px;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 16px;
        line-height: 21px;
        margin: 18px 0 48px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {        
        font-size: 14px;
        line-height: 17px;
        margin: 12px 0 40px;
    }
`;

export const Hand = styled(hand)`
    margin-bottom: -5.4px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        width: 20px;
        height: 20px;
        margin-bottom: -4px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 16px;
        height: 16px;
        margin-bottom: -2.6px;
    }
`;

export const Icons = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        gap: 21px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        gap: 18px;
    }
`;

export const Icon = styled.li`
`;

export const IconLink = styled.a`
    ${links}
    display: flex;
`;

const iconStyles = css`
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        width: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 32px;
    }
`;

export const IconGithub = styled(github)`
    ${iconStyles}
`;

export const IconFB = styled(facebook)`
    ${iconStyles}
`;

export const IconLinkedIN = styled(linkedIN)`
    ${iconStyles}
`;

export const IconInstagram = styled(instagram)`
    ${iconStyles}
`;