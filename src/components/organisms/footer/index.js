import Logo from '../../atoms/logo/light'
import FooterContact from '../../molecules/footer-contact'
import FooterResources from '../../molecules/footer-resources'
import FooterSignature from '../../molecules/footer-signature'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 50px;
    background-color: var(--dark-brown);

    @media (max-width: 500px) {
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

    @media (max-width: 1400px) {
        width: 40%;
    } 

    @media (max-width: 1100px) {
        width: 50%;
    } 

    @media (max-width: 1100px) {
        width: 60%;
    } 

    @media (max-width: 500px) {
        width: 100%;
    } 
`

const FooterArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    height: 80%;

    @media (max-width: 500px) {
        width: 90%;
        margin: 10px;
    } 
`

const FooterLogo = styled(Logo)`

    @media (max-width: 500px) {
        width: 200px;
    } 
`

function Footer() {
    return (
        <FooterContainer>
            <FooterArea>
                <FooterLogo />
            </FooterArea>
            <FooterOptions>
                <FooterContact />
            </FooterOptions>
        </FooterContainer>
    )
}
/* ANTIGO ----------------------------------------
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
*/
export default Footer