import styled, { css } from "styled-components";
import { ReactComponent as sun } from "./sun.svg";

export const ToggleContent = styled.div`
    margin-bottom: -26px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 12px;
    justify-content: end;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin-bottom: -13px;
        grid-template-columns: auto;
    }
`;

export const Button = styled.button`
    width: 48px;
    height: 26px;
    border-radius: 13px;
    background: ${({ theme }) => theme.colors.toggleBackground};
    border: 1px solid ${({ theme }) => theme.colors.text};
    cursor: pointer;
    position: relative;
    transition: background 0.3s, border 0.3s;
`;

export const Circle = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.text};
    line-height: 22.5px;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left 0.3s, color 0.3s, background 0.3s;

    ${({ $dark }) => $dark && css`
        left: 24px;
    `}
`;

export const Sun = styled(sun)`
`;