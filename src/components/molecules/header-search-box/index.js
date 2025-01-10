import styled from 'styled-components';
import { SlMagnifier } from "react-icons/sl";
import Input from '../../atoms/input';

const SearchLabel = styled.label`
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: 30px;
    width: 33%;
    padding: 0 10px;

    @media (max-width: 430px) {
        width: 40%;
    }
`

function SearchBox() {
    return (
        <SearchLabel>
            <Input placeholder='Buscar' />
            <SlMagnifier />
        </SearchLabel>
    )
}

export default SearchBox