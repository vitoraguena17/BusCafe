import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'


const SupportButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 33%;
    font-size: 1.5rem;
    font-weight: 300;
    cursor: pointer;
    color: var(--white);
    gap: 15px;
    transition: .5s all;

    &:hover {
    color: var(--light-beige);
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
            <FontAwesomeIcon icon={faHandHoldingDollar} />
        </SupportButton>
    )
}

export default SupportBtn