import PopupBase from '../pop-up-base';
import styled from 'styled-components';
import PixCode from '../../../../images/figure/PixCode.png';

const PixImage = styled.img`
  width: 40%;
  margin: 10px 0;
`

const Option1Popup = ({ isOpen, onClose }) => (
    <PopupBase isOpen={isOpen} onClose={onClose}>
        <p>A chave PIX para doação é:</p>
        <h2>hen.guirelli@gmail.com</h2>
        <p>Copie e cole essa chave no seu app bancário para doar.</p>
        <p>Ou utilize sua câmera para escanear o QR Code abaixo:</p>
        <PixImage src={PixCode} alt="Código PIX" />
    </PopupBase>
);

export default Option1Popup;
