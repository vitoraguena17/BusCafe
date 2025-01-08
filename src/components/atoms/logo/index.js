import logo from '../../../images/logo/logo.png';
import styled from 'styled-components';

const LogoImg = styled.img`
    width: 200px;
`;

function Logo({ className }) { 
    return (
        <LogoImg 
            className={className} // Passa 'className' para o elemento base
            src={logo} 
            alt='logo' 
        />
    );
}

export default Logo;
