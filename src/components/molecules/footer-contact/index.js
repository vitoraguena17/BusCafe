import styled from 'styled-components';

const Contact = styled.div`
    color: var(--dark-beige);
    width: 30%;

    @media (max-width: 500px) {
        width: 100%;
        text-align: center;
        margin-top:50px;
    } 
`

const FooterTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
`

const Options = styled.ul`
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    list-style: none;
    cursor: pointer;
`

const Option = styled.li`
    margin: 10px 0;
`

function FooterContact() {
    return (
        <Contact>
            <FooterTitle>Contato:</FooterTitle>
            <Options>
                <Option><p>henrique@gmail.com</p></Option>
            </Options>
        </Contact>
    )
}

export default FooterContact