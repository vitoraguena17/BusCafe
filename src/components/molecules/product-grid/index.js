import styled from 'styled-components';
import Product from '../../molecules/product-card';

const ProductSection = styled.section`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 10px;
  gap: 10px;

  @media (max-width: 430px) {
    flex-wrap: wrap; 
    & > *:nth-child(n + 2) {
      display: none; 
    }
  }
`;

function ProductGrid({ productCount = 4, customCard = null }) {
  const products = Array.from({ length: productCount }, (_, index) => (
    <Product key={index} CustomCard={customCard} /> 
  ));

  return <ProductSection>{products}</ProductSection>;
}

export default ProductGrid;
