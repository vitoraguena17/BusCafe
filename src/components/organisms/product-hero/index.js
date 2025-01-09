import styled from "styled-components";
import ProductInformation from "../../molecules/product-information"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

function ProductsHero() {

  return (
    <Container>
        <ProductInformation />
    </Container>
  )
}

export default ProductsHero;
