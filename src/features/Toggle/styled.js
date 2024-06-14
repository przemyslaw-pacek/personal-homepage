import styled, { css, keyframes } from "styled-components";
import { ReactComponent as sun } from "./sun.svg";

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ToggleContent = styled.div`
    margin-bottom: -26px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 12px;
    justify-content: end;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin-bottom: -13px;
        grid-template-columns: 46px;
    }
`;

export const Text = styled.span`
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 12px;
    animation: ${fadeInOut} 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        display: none;
    }
`;

export const Button = styled.button`
    width: 48px;
    height: 26px;
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.mercury};
    border: 1px solid ${({ theme }) => theme.colors.slateGray};
    cursor: pointer;
    position: relative;
    transition: background 0.3s, border 0.3s;

    ${({ $dark }) => $dark && css`
        background: ${({ theme }) => theme.colors.doveGray};
        border-color: ${({ theme }) => theme.colors.white};
    `}
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.slateGray};
    line-height: 22.5px;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.3s, color 0.3s, background 0.3s;

    ${({ $dark }) => $dark && css`
        color: ${({ theme }) => theme.colors.mineShaft};
        background: ${({ theme }) => theme.colors.white};
        left: 24px;
    `}
`;

export const Sun = styled(sun)`
`;