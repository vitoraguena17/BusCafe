import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
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

  const handleSeeMoreClick = () => {
    navigate('/products'); 
  };

  return (
    <Container>
      <GridTitle>Novidades</GridTitle>
      <ProductGrid productCount={4} />
      <ProductGrid productCount={4} />
      <SeeMore onClick={handleSeeMoreClick}>Ver mais produtos</SeeMore>
    </Container>
  );
}

export default GridArea;
