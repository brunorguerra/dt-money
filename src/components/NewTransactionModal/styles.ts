import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
    isActive: boolean;
    activeColor: "green" | "red";
}

const colors = {
    green: "#33cc95",
    red: "#e52e4d",
};

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 2rem;
        margin-bottom: 3.2rem;
    }

    input {
        width: 100%;
        padding: 0 2.4rem;
        height: 6.4rem;

        border-radius: 0.4rem;
        border: 0.1rem solid #d7d7d7;

        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1.6rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1.6rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 2.4rem;
        height: 6.4rem;

        background-color: var(--green);
        color: #fff;

        border-radius: 0.4rem;
        border: 0;

        font-size: 1.6rem;
        font-weight: 600;

        margin-top: 2.4rem;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1.6rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
    height: 6.4rem;
    border: 0.1rem solid #d7d7d7;
    border-radius: 0.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;
    background-color: ${({ isActive, activeColor }) =>
        isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

    &:hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    span {
        display: inline-block;
        margin-left: 1.6rem;
        color: var(--text-title);
    }
`;
