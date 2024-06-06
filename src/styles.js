import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        color: #007BFF;
    }
`;

export default GlobalStyle;
