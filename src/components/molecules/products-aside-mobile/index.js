import styled from "styled-components";
import { useState } from "react";
import Title from "../../atoms/title";
import ProductsSelect from "../products-dropdown";
import { BrandFilter, CategoryFilter, RoastFilter, GrindFilter, OtherCharacteristicsFilter } from '../products-filters/filters';
import PriceFilter from "../products-filters/price";
import { FaChevronDown } from "react-icons/fa";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    background-color: var(--light-grey);
    padding: 30px;

    @media (min-width: 440px) {
        display: none;
    }
`;

const TitleMobile = styled(Title)`
    font-size: 1.2rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

const Arrow = styled.span`
  font-size: 1rem;
  color: var(--dark-brown);
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
`;

const Content = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

function ProductsAsideMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Header onClick={toggleOpen}>
        <TitleMobile>Filtros</TitleMobile>
        <Arrow isOpen={isOpen}><FaChevronDown /></Arrow>
      </Header>
      <Content isOpen={isOpen}>
        <ProductsSelect />
        <BrandFilter />
        <PriceFilter />
        <CategoryFilter />
        <RoastFilter />
        <GrindFilter />
        <OtherCharacteristicsFilter />
      </Content>
    </Container>
  );
}

export default ProductsAsideMobile;
