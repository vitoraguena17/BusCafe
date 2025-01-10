import styled from "styled-components"
import ProductInformationTitle from "../../molecules/product-title-info"
import ProductImage from "../../atoms/product-img"
import Button from "../../atoms/button"

const Container = styled.section`
    display: flex;
    flex-direction: row;

    width: 50%;

    padding: 30px;
    border-radius: 10px;

    margin: 50px;

    @media (max-width: 430px) {
    width: 95%; 
    flex-direction: column;
    align-items: center;
  }
`

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 430px) {
    width: 100%; 
  }
`

const ProductImageInfo = styled(ProductImage)`
  width: 50%;

  @media (max-width: 430px) {
    width: 100%; 
  }
`

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
    font-weight: 300;

    @media (max-width: 430px) {
      font-size: 0.7rem; 
    }
  }

  span {
    font-size: 2.7rem;
    font-weight: 500;
    color: var(--dark-green);

    @media (max-width: 430px) {
      font-size: 1.2rem; 
    }
  }
`

const ButtonBuy = styled(Button)`
  padding: 0 20% 0 20%;
  height: 60px;
  font-size: 1.8rem;
  margin-bottom: 30px;
`

function ProductInformation() {
  return (
    <Container>
      <ProductImageInfo />
      <Content>
        <ProductInformationTitle />
        <ProductPrice>
          <p>A partir de:</p>
          <p>
            <span>R$ 49,99</span>
          </p>
        </ProductPrice>
        <ButtonBuy>Ir a loja</ButtonBuy>
      </Content>
    </Container>
  )
}

export default ProductInformation