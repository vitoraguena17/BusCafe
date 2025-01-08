import styled from "styled-components";

const Button = styled.button`
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-beige);
    background-color: var(--dark-brown);
    cursor: pointer;
    transition: .5s all;

    &:hover {
        background-color: transparent;
        border: 1px solid var(--dark-brown);
        color: var(--dark-brown);
    }
`

export default Button