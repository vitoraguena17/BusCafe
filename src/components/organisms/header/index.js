import Logo from '../../atoms/logo'
import SearchBox from '../../molecules/header-search-box';
import SupportBtn from '../../molecules/header-support';
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

const HeaderLogo = styled(Logo)`
    @media (max-width: 430px) {
        width: 100px;
    }
`


function Header() {
    return (
        <HeaderContainer>
            <HeaderArea>
                <HeaderLogo />
            </HeaderArea>
            <SearchBox />
            <SupportBtn />
        </HeaderContainer>
    )
}

export default Header