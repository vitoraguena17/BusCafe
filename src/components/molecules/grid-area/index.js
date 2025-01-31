import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../../atoms/title";
import ProductGrid from "../../molecules/product-grid";
import Button from "../../atoms/button";
import Menu from "../index-menu";

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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://168.75.77.79:5000/Product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  useEffect(() => {
    const normalizeGrind = (grind) => {
      const normalizedGrind = grind?.toLowerCase().replace(/\s+/g, ""); 
      if (
        normalizedGrind === "grão" ||
        normalizedGrind === "grao" ||
        normalizedGrind === "grãos" ||
        normalizedGrind === "graos"
      ) {
        return "grão";
      } else if (
        normalizedGrind === "moído" ||
        normalizedGrind === "moido" ||
        normalizedGrind === "moídos" ||
        normalizedGrind === "moidos"
      ) {
        return "moído";
      } else {
        return "outros";
      }
    };

    if (filter === "Grão") {
      setFilteredProducts(
        products.filter((product) => normalizeGrind(product.grind) === "grão")
      );
    } else if (filter === "Moído") {
      setFilteredProducts(
        products.filter((product) => normalizeGrind(product.grind) === "moído")
      );
    } else if (filter === "Outros") {
      setFilteredProducts(
        products.filter(
          (product) =>
            normalizeGrind(product.grind) !== "grão" &&
            normalizeGrind(product.grind) !== "moído"
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  const handleSeeMoreClick = () => {
    navigate("/products");
  };

  return (
    <Container>
      <Menu setFilter={setFilter} />
      <GridTitle>Novidades</GridTitle>
      {filteredProducts.length > 0 && (
        <>
          <ProductGrid
            productCount={4}
            products={filteredProducts.slice(0, 4)}
          />
          <ProductGrid
            productCount={4}
            products={filteredProducts.slice(4, 8)}
          />
        </>
      )}
      <SeeMore onClick={handleSeeMoreClick}>Ver mais produtos</SeeMore>
    </Container>
  );
}

export default GridArea;
