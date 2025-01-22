import PopupBase from '../pop-up-base';
import styled from 'styled-components';
import Button from '../../../atoms/button';

const PopUpButton = styled(Button)`
  width: 70%;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const MainPopup = ({ isOpen, onClose, onOptionSelect }) => (
    <PopupBase isOpen={isOpen} onClose={onClose}>
        <p>
            Este site foi desenvolvido completamente por uma única pessoa, com o objetivo de compartilhar
            conhecimento e recursos com a comunidade. Se você gostou do conteúdo, considere fazer uma
            doação para manter o site no ar e continuar evoluindo.
        </p>
        <PopUpButton onClick={() => onOptionSelect('option1')}>Faça uma doação</PopUpButton>
    </PopupBase>
);
/*ANTIGO --------------------------------------------
const MainPopup = ({ isOpen, onClose, onOptionSelect }) => (
    <PopupBase isOpen={isOpen} onClose={onClose}>
        <p>
            Este site foi desenvolvido completamente por uma única pessoa, com o objetivo de compartilhar
            conhecimento e recursos com a comunidade. Se você gostou do conteúdo, considere fazer uma
            doação para manter o site no ar e continuar evoluindo.
        </p>
        <PopUpButton onClick={() => onOptionSelect('option1')}>Faça uma doação</PopUpButton>
        <PopUpButton onClick={() => onOptionSelect('option2')}>Adicionar itens</PopUpButton>
    </PopupBase>
);
*/
export default MainPopup;
