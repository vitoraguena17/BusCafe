import logo from '../../../../images/logo/logo-dark.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const LogoImg = styled.img`
    width: 200px;
    cursor: pointer;
`;

function DarkLogo({ className }) {
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

export default DarkLogo;
