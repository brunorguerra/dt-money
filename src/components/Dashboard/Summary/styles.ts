import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: -16rem;

    div {
        background: var(--shape);
        padding: 2.4rem 3.2rem;
        border-radius: 0.4rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1.6rem;
            font-size: 3.2rem;
            font-weight: 500;
        }

        &.highlight-background {
            background-color: var(--green);
            color: #fff;
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;
