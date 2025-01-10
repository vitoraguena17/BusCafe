import styled from "styled-components";
import ProductInformation from "../../molecules/product/product-information"
import ProductDescription from "../../molecules/product/product-description"
import ProductTable from "../../molecules/product/product-spec"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`

function ProductHero() {

  return (
    <Container>
        <ProductInformation />
        <ProductDescription />
        <ProductTable />
    </Container>
  )
}

export default ProductHero;
