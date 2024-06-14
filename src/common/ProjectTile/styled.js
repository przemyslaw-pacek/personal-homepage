import styled, { css } from "styled-components";

export const Content = styled.div`
    background: ${({ theme }) => theme.colors.white};
    max-width: 592px;
    font-size: 18px;
    line-height: 25px;
    padding: 50px;
    border: 6px solid ${({ theme }) => theme.colors.iron30};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.colors.violet3},
                0px -2px 50px 0px ${({ theme }) => theme.colors.violet2};
    transition: background 0.3s, border 0.3s;

    ${({ $dark }) => $dark && css`
        background: ${({ theme }) => theme.colors.mineShaft72};
        border-color: ${({ theme }) => theme.colors.iron10};
    `}

    &:hover {
        border-color: ${({ theme }) => theme.colors.scienceBlue20};
        
        ${({ $dark }) => $dark && css`
            border-color: ${({ theme }) => theme.colors.scienceBlue50};
        `}
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        padding: 26px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        max-width: 692px;
        font-size: 16px;
        line-height: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 14px;
        line-height: 17px;
        padding: 18px;
    }
`;

export const Headline = styled.h3`
    color: ${({ theme }) => theme.colors.scienceBlue};
    font-size: 24px;
    line-height: 29px;
    margin-top: 0;
    transition: color 0.3s;
    text-transform: capitalize;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.dodgerBlue};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        font-size: 20px;
        line-height: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Description = styled.p`
    margin-bottom: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin-bottom: 16px;
    }
`;

export const Links = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto;
    gap: 8px;
`;

export const LinkTitle = styled.span`
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.scienceBlue};
    text-decoration-color: ${({ theme }) => theme.colors.scienceBlue20};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    transition: color 0.3s, text-decoration-color 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.dodgerBlue};
        text-decoration-color: ${({ theme }) => theme.colors.iron30};
    `}

    &:hover {
        text-decoration-color: ${({ theme }) => theme.colors.scienceBlue};

        ${({ $dark }) => $dark && css`
        text-decoration-color: ${({ theme }) => theme.colors.dodgerBlue};
        text-decoration-thickness: unset;
    `}
    }
`;