import styled from 'styled-components';
import { SlMagnifier } from "react-icons/sl";

const SearchInput = styled.input`
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

const SearchLabel = styled.label`
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 30px;
    width: 33%;
    padding: 0 10px;

    @media (max-width: 430px) {
        width: 42%;
    }
`

function SearchBox() {
    return (
        <SearchLabel>
            <SearchInput placeholder='Buscar' />
            <SlMagnifier />
        </SearchLabel>
    )
}

export default SearchBox