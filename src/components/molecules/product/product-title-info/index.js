import styled from "styled-components"
import Title from "../../../atoms/title"

const Container = styled.section`
    display: flex;
    flex-direction: column;
`

const ProductID = styled.div`
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--medium-grey);

    @media (max-width: 430px) {
      font-size: 0.7rem; 
    }
  }
`

const TitleInfo = styled(Title)`
    line-height: 1.8rem;
    margin-top: 10px;
`

function ProductInformationTitle() {
    return (
        <Container>
            <TitleInfo>Café Austral - Moído</TitleInfo>
            <ProductID>
                <p>ID: 0012993 | Café Austral</p>
            </ProductID>
        </Container>
    )
}

export default ProductInformationTitle