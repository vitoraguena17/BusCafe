import styled from "styled-components";
import ProductInformationTitle from "../product-title-info";
import ProductImage from "../../../atoms/product-img";
import Button from "../../../atoms/button";

const Container = styled.section`
  display: flex;
  flex-direction: row;

  width: 50%;

  padding: 30px;
  border-radius: 10px;

  margin: 30px 0 20px 0;

  @media (max-width: 430px) {
    width: 90%;
    padding: 0;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 0 0;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    width: 100%;
    height: 250px;
  }
`;

const ProductImageInfo = styled(ProductImage)`
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
    font-weight: 300;

    @media (max-width: 430px) {
      font-size: 1rem;
    }
  }

  span {
    font-size: 2.7rem;
    font-weight: 500;
    color: var(--dark-green);

    @media (max-width: 430px) {
      font-size: 2.2rem;
    }
  }
`;

const ButtonBuy = styled(Button)`
  padding: 0 20% 0 20%;
  height: 50px;
  font-size: 1.8rem;
  margin-bottom: 30px;
`;

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
  );
}

export default ProductInformation;
