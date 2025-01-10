import React, { useState } from 'react';
import styled from 'styled-components';
import { BiDonateHeart } from 'react-icons/bi';
import MainPopup from '../../organisms/pop-up/main-pop-up';
import Option1Popup from '../../organisms/pop-up/support-pop-up';
import Option2Popup from '../../organisms/pop-up/add-pop-up';

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

    @media(max-width: 430px) {
        width: 30%;

        p {
            display: none;
            width: 0;
        }
    }
`

const SupportBtn = () => {
    const [activePopup, setActivePopup] = useState(null);
    const closePopup = () => setActivePopup(null);

    return (
        <>
            <SupportButton onClick={() => setActivePopup('main')}>
                <p>Contribuir</p>
                <BiDonateHeart />
            </SupportButton>

            <MainPopup isOpen={activePopup === 'main'} onClose={closePopup} onOptionSelect={setActivePopup} />
            <Option1Popup isOpen={activePopup === 'option1'} onClose={closePopup} />
            <Option2Popup isOpen={activePopup === 'option2'} onClose={closePopup} />
        </>
    );
};

export default SupportBtn;
