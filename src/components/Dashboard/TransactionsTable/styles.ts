import styled from "styled-components";

export const Container = styled.section`
    margin-top: 6.4rem;
    overflow-x: auto;

    table {
        width: 100%;
        min-width: 100rem;
        border-spacing: 0 0.8rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1.6rem 3.2rem;
            text-align: left;
            line-height: 2.4rem;
        }

        td {
            padding: 1.6rem 3.2rem;
            border: 0;
            border-radius: 0.4rem;
            background-color: var(--shape);
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            &:last-child {
                button {
                    color: var(--red);

                    transition: filter 0.2s;
                    &:hover {
                        filter: brightness(0.75);
                    }
                }
            }
        }
    }
`;
