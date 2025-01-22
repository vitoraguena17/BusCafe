import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import DarkLogo from '../../../atoms/logo/dark';

// Animação do popup
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    backdrop-filter: blur(2px);
    transition: all 0.3s ease;
`;

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    padding: 20px;
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: ${fadeIn} 0.4s ease-in;

    p{
        text-align: justify;
        margin: 10px 0;
        padding: 0 30px;
    }

    @media (max-width: 1100px) {
      width: 65%;
    }

    @media (max-width: 500px) {
        top: 55%;
        width: 85%;
    }
`;

const CloseButton = styled.button`
    position: absolute; 
    top: 10px; 
    right: 10px; 
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem; 
    color: var(--dark-brown); 
`;

const StyledLogo = styled(DarkLogo)`
    margin: 20px 0;
`;

const PopupBase = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} />
            <Container>
                <CloseButton onClick={onClose}>
                    <IoMdClose />
                </CloseButton>
                <StyledLogo />
                {children}
            </Container>
        </>
    );
};

export default PopupBase;
