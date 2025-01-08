import Logo from '../logo'
import SearchBox from './search-box';
import SupportBtn from './support-btn';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 8vh;
    background-color: var(--dark-brown);
`

const HeaderArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
`

function Header() {
    return (
        <HeaderContainer>
            <HeaderArea>
                <Logo />
            </HeaderArea>
            <SearchBox />
            <SupportBtn />
        </HeaderContainer>
    )
}

export default Header