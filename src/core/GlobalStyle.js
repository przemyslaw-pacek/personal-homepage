import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.colors.alabaster};
        color: ${({ theme }) => theme.colors.slateGray};
        font-family: 'Inter', sans-serif;
        word-break: break-word;
        transition: background 0.3s, color 0.3s;

        ${({ $dark }) => $dark && css`
            background: ${({ theme }) => theme.colors.mineShaft};
            color: ${({ theme }) => theme.colors.white};
        `}
    }
`;