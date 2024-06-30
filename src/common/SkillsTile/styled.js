import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 4px;
    margin-top: 72px;
    box-shadow: 0 16px 58px ${({ theme }) => theme.colors.tileShadow},
                0 -2px 50px ${({ theme }) => theme.colors.tileShadow2};
    transition: background 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-top: 48px;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.text2};
    font-weight: ${({ theme }) => theme.fontWeights.heavy};
    font-size: 30px;
    line-height: 36px;
    padding: 32px 0 15px;
    margin: 32px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background3};
    transition: color 0.3s, border 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        font-size: 26px;
        line-height: 30px;
        padding-top: 24px;
        margin: 24px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        font-size: 18px;
        line-height: 22px;
        padding: 16px 0 12px;
        margin: 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(auto, 314px));
    gap: 8px;
    padding: 0 8px 32px 52px;
    font-size: 18px;

    ::marker {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 23px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
        padding: 0 16px 28px 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        padding: 0 0 16px 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phone}px) {
        padding-left: 30px;
        font-size: 14px;
        line-height: 17px;
 
        ::marker {
            font-size: 14px;
        }
    }
`;

export const Item = styled.li`
`;