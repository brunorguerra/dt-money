import styled from "styled-components";

export const Container = styled.section`
    margin-top: 6.4rem;

    table {
        width: 100%;
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
        }
    }
`;
