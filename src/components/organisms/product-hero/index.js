import styled from "styled-components";
import ProductInformation from "../../molecules/product/product-information";
// import ProductDescription from "../../molecules/product/product-description";
import ProductTable from "../../molecules/product/product-spec";
import CardContent from "../../molecules/feature-card-content";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

function ProductHero() {
  return (
    <Container>
      <ProductInformation />
      <CardContent />
      {/* <ProductDescription /> */}
      <ProductTable />
    </Container>
  );
}

export default ProductHero;
