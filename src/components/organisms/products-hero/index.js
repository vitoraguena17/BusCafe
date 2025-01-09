import styled from "styled-components";
import Title from '../../atoms/title';
import ProductGrid from '../../molecules/product-grid';
import ProductsAside from "../../molecules/products-aside";
import PaginationText from "../../molecules/pagination-button"

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;  
`;

const ProductsBox = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  width: 80%;
`;

function ProductsHero({ totalProducts = 9, productsPerGrid = 3 }) {
  const totalGrids = Math.ceil(totalProducts / productsPerGrid);

  return (
    <Container>
      <Title>Produtos</Title>
      <Content>
        <ProductsAside />
        <ProductsBox>
          {Array.from({ length: totalGrids }).map((_, index) => (
            <ProductGrid key={index} productCount={productsPerGrid} />
          ))}
        </ProductsBox>
      </Content>
      <PaginationText />
    </Container>
  );
}

export default ProductsHero;
