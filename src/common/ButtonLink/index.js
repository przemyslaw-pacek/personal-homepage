import styled, { css } from "styled-components";

export const ButtonLink = styled.a`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.scienceBlue};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: 20px;
    padding: 12px 16px;
    margin-top: 32px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.iron30};
    transition: background 0.3s, 0.3s linear;

    ${({ $dark }) => $dark && css`
        background: ${({ theme }) => theme.colors.dodgerBlue};
    `}

    &:hover {
        box-shadow:
            -2px -2px 0px 0px ${({ theme }) => theme.colors.anakiwa},
            2px 2px 0px 0px ${({ theme }) => theme.colors.anakiwa},
            -2px 2px 0px 0px ${({ theme }) => theme.colors.anakiwa},
            2px -2px 0px 0px ${({ theme }) => theme.colors.anakiwa};

        ${({ $dark }) => $dark && css`
            box-shadow:
                -2px -2px 0px 0px ${({ theme }) => theme.colors.shipCove},
                2px 2px 0px 0px ${({ theme }) => theme.colors.shipCove},
                -2px 2px 0px 0px ${({ theme }) => theme.colors.shipCove},
                2px -2px 0px 0px ${({ theme }) => theme.colors.shipCove};
        `}
    }

    &:active {
        box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.colors.parsley} inset;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        margin-top: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        gap: 12px;
        font-size: 18px;
        border: none;
    }
`;