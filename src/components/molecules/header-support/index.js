import styled from 'styled-components';
import { BiDonateHeart } from "react-icons/bi";


const SupportButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 33%;
    font-size: 1.5rem;
    font-weight: 300;
    cursor: pointer;
    color: var(--dark-beige);
    gap: 10px;
    transition: .5s all;

    &:hover {
    color: var(--white);
    }

    @media (max-width: 430px) {
        width: 25%;

        p { 
            display: none;
            width: 0;
        }
    }
`

function SupportBtn() {
    return (
        <SupportButton>
            <p>Contribuir</p>
            <BiDonateHeart />
        </SupportButton>
    )
}

export default SupportBtn