import styled from "styled-components";

const Button = styled.button`
    height: 2.5rem;
    background-color: var(--dark-beige);
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark-brown);
    cursor: pointer;
    transition: .5s all;

    &:hover {
        background-color: transparent;
        border: solid 1px var(--dark-beige);
        color: var(--dark-beige);
    }
`

export default Button