import styled, { css, keyframes } from "styled-components";
import { ReactComponent as spinner } from "./spinner.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
}
`;

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

export const Spinner = styled(spinner)`
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.scienceBlue};
    margin-top: 48px;
    transition: color 0.3s;

    & circle {
        stroke: ${({ theme }) => theme.colors.iron};
    }

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.dodgerBlue};

        & circle {
            stroke: ${({ theme }) => theme.colors.doveGray};
        }
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 130px;
        height: 130px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 100px;
        height: 100px;
    }
`;