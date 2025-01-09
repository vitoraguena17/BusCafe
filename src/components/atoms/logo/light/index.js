import logo from '../../../../images/logo/logo.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const LogoImg = styled.img`
    width: 200px;
    cursor: pointer;
`;

function Logo({ className }) {
    const navigate = useNavigate();

    const handleIndexClick = () => {
        navigate('/'); 
    };
    
    return (
        <LogoImg
            className={className} 
            src={logo}
            alt='logo'
            onClick={handleIndexClick}
        />
    );
}

export default Logo;
