import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import Title from '../../atoms/title';
import ProductGrid from '../../molecules/product-grid';
import Button from '../../atoms/button';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GridTitle = styled(Title)`
  margin-bottom: 20px; 
`;

const SeeMore = styled(Button)`
  width: 400px;
  height: 50px;
  margin: 30px 0 80px 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--dark-beige);
  background-color: var(--dark-brown);

  &:hover {
    border: 1px solid var(--dark-brown);
    color: var(--dark-brown);
  }

  @media (max-width: 430px) {
    width: 250px;
  }
`;

function GridArea() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://168.75.77.79:5000/Product')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 8))) // Pegando apenas os 8 primeiros produtos
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleSeeMoreClick = () => {
    navigate('/products'); 
  };

  return (
    <Container>
      <GridTitle>Novidades</GridTitle>
      {products.length > 0 && (
        <>
          <ProductGrid productCount={4} products={products.slice(0, 4)} />
          <ProductGrid productCount={4} products={products.slice(4, 8)} />
        </>
      )}
      <SeeMore onClick={handleSeeMoreClick}>Ver mais produtos</SeeMore>
    </Container>
  );
}

export default GridArea;
