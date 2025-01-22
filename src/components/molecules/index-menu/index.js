import styled from 'styled-components';
import Pacote from '../../../images/icons/pacote-cafe.png'
import Grao from '../../../images/icons/grao-cafe.png'
import Capsula from '../../../images/icons/capsula-cafe.png'
import Sache from '../../../images/icons/sache-cafe.png'
import Copo from '../../../images/icons/copo-cafe.png'

const SelectionArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 10px 40px;
    background-color: var(--light-grey);
    border-radius: 10px;
    margin: 40px;

    @media (max-width: 600px) {
        width: 90%;
    }
`

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    @media (max-width: 600px) {
        gap: 10px;
    }
`

const ButtonLogo = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    gap: 10px;
    cursor: pointer;
    transition: .3s ease-in-out;
    background-color: transparent;
    color: black;

    p {
        font-size: 1rem;
        font-weight: 300;
    }

    &:hover {
        transform: scale(1.1);
    }

`

const ButtonImg = styled.img`
    width: 60px;
    background-color: var(--white);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
`

const SelectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-brown)
`

function Menu() {
    return (
        <SelectionArea>
            <SelectionTitle>Escolha seu Café</SelectionTitle>
            <ButtonArea>
                <ButtonLogo>
                    <ButtonImg src={Pacote} alt="Logo" />
                    <p>Moído</p>
                </ButtonLogo>
                <ButtonLogo>
                    <ButtonImg src={Grao} alt="Logo" />
                    <p>Grão</p>
                </ButtonLogo>
                <ButtonLogo>
                    <ButtonImg src={Capsula} alt="Logo" />
                    <p>Cápsula</p>
                </ButtonLogo>
                <ButtonLogo>
                    <ButtonImg src={Sache} alt="Logo" />
                    <p>Sachê</p>
                </ButtonLogo>
                <ButtonLogo>
                    <ButtonImg src={Copo} alt="Logo" />
                    <p>Outros</p>
                </ButtonLogo>
            </ButtonArea>
        </SelectionArea>
    )
}

export default Menu