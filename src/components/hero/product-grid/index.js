import styled from 'styled-components';
import Product from './product';

const ProductSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 10px;
  gap: 10px;

  @media (max-width: 430px) {
    flex-wrap: wrap; /* Permite que os elementos se reorganizem */
    & > *:nth-child(n + 2) {
      display: none; /* Oculta todos os produtos a partir do segundo */
    }
  }
`;

function ProductGrid() {
  return (
    <ProductSection>
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductSection>
  );
}

export default ProductGrid;
