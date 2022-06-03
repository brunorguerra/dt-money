import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 10px
        @media (max-width: 720px) {
            font-size: 56.25%; // 9px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        border: 0;
        cursor: pointer;
        background: transparent;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    };

    .react-modal-content {
        width: 100%;
        max-width: 57.6rem;
        background: var(--background);
        padding: 4.8rem;
        position: relative;
        border-radius: 0.4rem;
    };

    .react-modal-close {
        width: 4rem;
        height: 4rem;
        border-radius: 0.4rem;

        font-size: 0;

        position: absolute;
        top: 2.4rem;
        right: 2.4rem;

        img {
            width: auto;
            max-width: 100%;
            transition: filter 0.2s;
        }

        &:hover img {
            filter: brightness(0.8);
        }
    }
`;
