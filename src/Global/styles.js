import { createGlobalStyle } from "styled-components";

export const ThemeLight = createGlobalStyle`
    :root{
        // gray scale
        --gray-one:#f5f5f5;
        --gray-two:#e0e0e0;
        --gray-three:#828282;
        --gray-four:#333;
        // main colors
        --primary: #27ae60;
        --primary-half:#93d7af;
        --secondary:#eb5757;
    }
`;

export const ThemeDark = createGlobalStyle`
    :root{
        // gray scale
        --gray-one:#f5f5f5;
        --gray-two:#e0e0e0;
        --gray-three:#828282;
        --gray-four:#333;
        // main colors
        --primary: #443DEB;
        --primary-half:#615CFF;
        --secondary:#eb5757;
    }
`;

export const ThemeFeedback = createGlobalStyle`
    :root{
        --negative:#e60000;
        --warning:#ffcd07;
        --sucsses:#168821;
        --information:#155bcb;
    }
`;

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-font: 'Inter', sans-serif;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: var(--primary-font);
        transition: 300ms;
    }

    button{
        padding: 0.8rem 1.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        border: none;
    }

    ul, ol, li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    h1 {
        font-size: 26px;
        font-weight: 700;
    }

    h2 {
        font-size: 22px;
        font-weight: 700;
    }

    h3 {
        font-size: 18px;
        font-weight: 700;
    }

    h4 {
        font-size: 14px;
        font-weight: 700;
    }

    .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0.8rem;
    }

    .container.small {
    max-width: 1200px;
    }

    .container.big {
    max-width: 1320px;
    }
`;
