import { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Title from "../../atoms/title";
import ProductGrid from "../../molecules/product-grid";
import ProductsAside from "../../molecules/products-aside";
import PaginationText from "../../molecules/pagination-button";
import ProductsAsideMobile from "../../molecules/products-aside-mobile";

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
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://168.75.77.79:5000/Product");
        const data = await response.json();
        setProducts(data.slice(0, totalProducts)); // Carrega todos os produtos de uma vez
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, [totalProducts]);

  // Divide os produtos em grids de acordo com o número de colunas
  const grids = [];
  for (let i = 0; i < products.length; i += itemsPerGrid) {
    grids.push(products.slice(i, i + itemsPerGrid));
  }

  return (
    <Container>
      <ProductsAsideMobile />
      <ProductsTitle>Produtos</ProductsTitle>
      <Content>
        <ProductsAside />
        <ProductsBox>
          {grids.map((group, index) => (
            <ProductGrid key={index} products={group} />
          ))}
        </ProductsBox>
      </Content>
      <PaginationText />
    </Container>
  );
}

export default ProductsHero;
