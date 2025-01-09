import styled from "styled-components"
import Title from "../../atoms/title"
import ProductImage from "../../atoms/product-img"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--light-grey);
    padding: 30px;
    border-radius: 10px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  p {
    font-size: 0.8rem;
    font-weight: 300;

    @media (max-width: 430px) {
      font-size: 0.7rem; 
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--dark-green);

    @media (max-width: 430px) {
      font-size: 1.2rem; 
    }
  }
`

function ProductInformation() {
    return (
        <Container>
            <ProductImage />
            <Content>
            <Title>Café Austral - Moído</Title>
            <ProductPrice>
                <p>A partir de:</p>
                <p>
                    <span>R$ 49,99</span>
                </p>
            </ProductPrice>
            </Content>
        </Container>
    )
}

export default ProductInformation