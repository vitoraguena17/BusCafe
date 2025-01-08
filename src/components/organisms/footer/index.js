import Logo from '../../atoms/logo'
import FooterContact from '../../molecules/footer-contact'
import FooterResources from '../../molecules/footer-resources'
import FooterSignature from '../../molecules/footer-signature'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 50px;
    background-color: var(--dark-brown);

    @media (max-width: 430px) {
        flex-direction: column;
        padding: 20px;
    }   
`

const FooterOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 33%;
    height: 80%;

    @media (max-width: 430px) {
        display: none;
    } 
`

const FooterArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    height: 80%;

    @media (max-width: 430px) {
        width: 90%;
        margin: 10px;
    } 
`

const FooterLogo = styled(Logo)`

    @media (max-width: 430px) {
        display: none;
    } 
`

function Footer() {
    return (
        <FooterContainer>
            <FooterArea>
                <FooterLogo />
            </FooterArea>
            <FooterOptions>
                <FooterResources />
                <FooterContact />
            </FooterOptions>
            <FooterArea>
                <FooterSignature />
            </FooterArea>
        </FooterContainer>
    )
}

export default Footer