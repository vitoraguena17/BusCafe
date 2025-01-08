import styled from 'styled-components';
import Input  from '../../input';
import Button from '../../button';

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

function FooterSignature() {
    return (
        <SignatureContainer>
            <SignaturTitle>Fique por dentro das novidades!</SignaturTitle>
            <InputArea>
                <Input
                    type="name" name="name"
                    id="name-input"
                    placeholder="Nome"
                ></Input>
                <Input
                    type="email" name="email"
                    id="email-input"
                    placeholder="E-mail"
                ></Input>
                <Button>Assinar</Button>
            </InputArea>
        </SignatureContainer>
    )
}

export default FooterSignature