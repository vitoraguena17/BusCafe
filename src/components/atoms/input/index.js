import styled from "styled-components";

const Input = styled.input`
    height: 2rem;
    width: 100%;
    border: none;
    border-radius: 30px;
    background-color: var(--white);
    color: var(--dark-brown);
    padding: 15px;
    font-size: 1rem;
    
    &::placeholder {
    color: var(--dark-brown);
    font-size: 1rem;
    }

    &:focus {
    outline: none; 
    border: none;  
    }
`

export default Input