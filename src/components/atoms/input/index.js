import styled from "styled-components";

const Input = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: 2px solid var(--dark-beige);
    border-radius: 10px;
    color: var(--dark-beige);
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;

    &::placeholder {
        font-size: 1rem;
        font-weight: 300;
        color: var(--dark-beige);
    }
`

export default Input