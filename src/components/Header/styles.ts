import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    width: min(112rem, 90%);
    margin: 0 auto;

    padding: 3.2rem 1.6rem 20rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1.6rem;
        color: #fff;
        background-color: var(--blue-light);
        padding: 0 3.2rem;
        border-radius: 0.4rem;
        height: 4.8rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
`;
