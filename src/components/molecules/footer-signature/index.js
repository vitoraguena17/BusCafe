import styled from 'styled-components';
import Button from '../../atoms/button';

const SignatureContainer = styled.div`
    width: 70%;
`

const SignaturTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--dark-beige);
    margin-bottom: 15px;
    text-align:center;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const FooterButton = styled(Button)`
    background-color: var(--dark-beige);
    color: var(--dark-brown);

    &:hover {
        background-color: var(--dark-brown);
        border: 1px solid var(--dark-beige);
        color: var(--dark-beige)
    }
`
const FooterInput = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: 2px solid var(--dark-beige);
    border-radius: 10px;
    color: var(--dark-beige);
    padding: 10px;
    font-size: 1rem;
    font-weight: 300;

    &::placeholder {
        font-size: 1rem;
        font-weight: 300;
        color: var(--dark-beige);
    }
`

function FooterSignature() {
    return (
        <SignatureContainer>
            <SignaturTitle>Fique por dentro das novidades!</SignaturTitle>
            <InputArea>
                <FooterInput
                    type="name" name="name"
                    id="name-input"
                    placeholder="Nome"
                ></FooterInput>
                <FooterInput
                    type="email" name="email"
                    id="email-input"
                    placeholder="E-mail"
                ></FooterInput>
                <FooterButton>Assinar</FooterButton>
            </InputArea>
        </SignatureContainer>
    )
}

export default FooterSignature