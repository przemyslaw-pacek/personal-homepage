import styled from "styled-components";
import { ReactComponent as Symbol } from "../../Footer/github.svg";

export const Wrapper = styled.header`
    color: ${({ theme }) => theme.colors.text2};
    text-align: center;
    margin-top: 72px;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        margin-top: 48px;
    }
`;

export const GithubSymbol = styled(Symbol)`
    color: ${({ theme }) => theme.colors.blue};
    width: 40px;
    height: 40px;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        width: 32px;
        height: 32px;
    }
`;

export const Title = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    font-size: 30px;
    line-height: 36px;
    margin: 12px 0 8px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 24px;
        line-height: 29px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`;