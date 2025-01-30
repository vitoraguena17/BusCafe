import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://168.75.77.79:5000/Product')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, productCount)))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, [productCount]);

  return (
    <ProductSection>
      {products.map((product) => (
        <Product key={product.id} product={product} CustomCard={customCard} />
      ))}
    </ProductSection>
  );
}

export default ProductGrid;
