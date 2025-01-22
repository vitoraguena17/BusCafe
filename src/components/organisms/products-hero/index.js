import styled from "styled-components";
import { useMediaQuery } from "react-responsive"; // Importação do hook
import Title from '../../atoms/title';
import ProductGrid from '../../molecules/product-grid';
import ProductsAside from "../../molecules/products-aside";
import PaginationText from "../../molecules/pagination-button";
import ProductsAsideMobile from "../../molecules/products-aside-mobile";

const CustomProductCard = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 33%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }

    @media (max-width: 600px) {
      width: 90%; 
      padding: 20px; 
      border-width: 1px;
    }
  }
`;

const ProductsTitle = styled(Title)`
  margin: 30px 0;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%; 
`;

const ProductsBox = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;

  width: 70%;

  @media (max-width: 600px) {
      width: 100%;
  }
`;

function ProductsHero({ totalProducts = 12, productsPerGrid = 3 }) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const itemsPerGrid = isMobile ? 2 : productsPerGrid;
  const totalGrids = Math.ceil(totalProducts / itemsPerGrid);

  return (
    <Container>
      <ProductsAsideMobile />
      <ProductsTitle>Produtos</ProductsTitle>
      <Content>
        <ProductsAside />
        <ProductsBox>
          {Array.from({ length: totalGrids }).map((_, index) => (
            <ProductGrid
              key={index}
              productCount={itemsPerGrid} 
              customCard={CustomProductCard}
            />
          ))}
        </ProductsBox>
      </Content>
      <PaginationText />
    </Container>
  );
}

export default ProductsHero;
