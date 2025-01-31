import styled from "styled-components";
import Product from "../../molecules/product-card";

const ProductSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "80%"};
  margin: 10px;
  gap: 10px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    & > * {
      flex: 0 1 calc(50% - 10px);
    }
    & > *:nth-child(n + 3) {
      display: none;
    }
  }
`;

function ProductGrid({ products = [], customCard = null, width }) {
  return (
    <ProductSection width={width}>
      {products.map((product) => (
        <Product key={product.id} product={product} CustomCard={customCard} />
      ))}
    </ProductSection>
  );
}

export default ProductGrid;
