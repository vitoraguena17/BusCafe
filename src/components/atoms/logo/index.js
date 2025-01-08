import logo from '../../../images/logo/logo.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const LogoImg = styled.img`
    width: 200px;
    cursor: pointer;
`;

function Logo({ className }) {
    const navigate = useNavigate();

    const handleSeeMoreClick = () => {
        navigate('/'); 
    };
    
    return (
        <LogoImg
            className={className} // Passa 'className' para o elemento base
            src={logo}
            alt='logo'
            onClick={handleSeeMoreClick}
        />
    );
}

export default Logo;
