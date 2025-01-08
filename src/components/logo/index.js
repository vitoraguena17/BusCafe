import logo from '../../images/logo.png'
import styled from 'styled-components';

const LogoImg = styled.img`
    width: 200px;

    @media (max-width: 430px) {
        width: 100px;
    }
`

function Logo() {
    return (
        <LogoImg 
            src={logo} 
            alt='logo' 
        />
    )
}

export default Logo