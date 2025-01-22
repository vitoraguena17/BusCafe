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

function ProductGrid({ productCount = 4, customCard = null }) {
  const products = Array.from({ length: productCount }, (_, index) => (
    <Product key={index} CustomCard={customCard} />
  ));

  return <ProductSection>{products}</ProductSection>;
}

export default ProductGrid;
