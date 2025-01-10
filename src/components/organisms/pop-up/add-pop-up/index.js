import styled from 'styled-components';
import PopupBase from '../pop-up-base';
import Button from '../../../atoms/button'

const AddButton = styled(Button)`
  width: 70%;
  font-size: 1.2rem;
  margin: 15px 0;
`

const PopupBaseStyled = styled(PopupBase)`
  top: 30px;
`

const InputArea = styled.div`
  display: flex;
  flex-direction:row;
`

const InputSection = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  margin: 10px 5px;
`

const DataInput = styled.input`
  width: 100%;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;

  &:focus {
    outline: none; 
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const Option2Popup = ({ isOpen, onClose }) => (
  <PopupBaseStyled isOpen={isOpen} onClose={onClose}>
    <InputArea>
      <InputSection>
        <DataInput
          placeholder='Marca'
        />
        <DataInput
          placeholder='Nome do produto'
        />
        <DataInput
          placeholder='Preço máximo encontrado'
        />
        <DataInput
          placeholder='Preço minimo encontrado'
        />
        <DataInput
          placeholder='Peso em gramas'
        />
        <DataInput
          placeholder='Categoria buscar do DB'
        />
        <DataInput
          placeholder='Localização do café'
        />
        <DataInput
          placeholder='Variedade'
        />
        <DataInput
          placeholder='Processo'
        />
        <DataInput
          placeholder='Torra'
        />
        <DataInput
          placeholder='Localização da torrefação'
        />
        <DataInput
          placeholder='Link do produto'
        />
      </InputSection>
      <InputSection>
        <DataInput
          placeholder='Sensorial'
        />
        <DataInput
          placeholder='Altitude'
        />
        <DataInput
          placeholder='Sabor'
        />
        <DataInput
          placeholder='Notas'
        />
        <DataInput
          placeholder='Corpo'
        />
        <DataInput
          placeholder='Acidez'
        />
        <DataInput
          placeholder='Amargor'
        />
        <DataInput
          placeholder='Doçura'
        />
        <DataInput
          placeholder='Finalização'
        />
        <DataInput
          placeholder='Aroma'
        />
        <DataInput
          placeholder='Moagem'
        />
        <DataInput
          placeholder='Nota BSCA'
        />
      </InputSection>
    </InputArea>
    <AddButton>Salvar</AddButton>
  </PopupBaseStyled>
)

export default Option2Popup;
