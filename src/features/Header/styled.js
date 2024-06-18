import styled, { css } from "styled-components";
import image from "../../common/data/image.png";
import { ReactComponent as envelope } from "./envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: auto;
    }
`;

export const Picture = styled.div`
    width: 384px;
    height: 384px;
    background-image: url("${image}");
    background-size: cover;
    background-position: center;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        width: 256px;
        height: 256px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 128px;
        height: 128px;
    }
`;

export const Content = styled.div`
    margin: 64px 127px 73px 72px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        margin: 32px 86px 48px 36px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 32px 0 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin: 16px 0 0;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.mineShaft};
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    font-size: 38px;
    line-height: 46px;
    margin: 16px 0 32px;
    transition: color 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.white};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 30px;
        line-height: 32px;
        margin: 12px 0 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 22px;
        line-height: 27px;
        margin-top: 8px;
    }
`;

export const Info = styled.div`
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        line-height: 26px;
        margin-bottom: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 17px;
        line-height: 24px;
    }
`;

export const Envelope = styled(envelope)`
    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 18px;
    }
`;