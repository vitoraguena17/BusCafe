import styled from 'styled-components';

const SearchInput = styled.input`
    height: 2rem;
    width: 33%;
    border: none;
    border-radius: 30px;
    background-color: var(--white);
    color: var(--dark-brown);
    padding: 15px;
    font-size: 1rem;
    font-weight: 400;
    
    &::placeholder {
    color: var(--dark-brown);
    font-size: 1rem;
    }

    @media (max-width: 430px) {
        width: 42%;
    }
`
function SearchBox() {
    return (
        <SearchInput placeholder='Buscar' />
    )
}

export default SearchBox