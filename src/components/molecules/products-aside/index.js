import styled from "styled-components"
import Title from "../../atoms/title"
import ProductsSelect from "../products-dropdown"
import { BrandFilter, CategoryFilter, RoastFilter, GrindFilter, OtherCharacteristicsFilter } from '../products-filters/filters';
import PriceFilter from "../products-filters/price"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20%;
    background-color: var(--light-grey);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
    padding: 30px;
    border-radius: 10px;

    @media (max-width: 430px) {
        display: none
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function ProductsAside() {
    return (
        <Container>
            <Title>Filtros</Title>
            <Content>
                <ProductsSelect />
                <BrandFilter />
                <PriceFilter />
                <CategoryFilter />
                <RoastFilter />
                <GrindFilter />
                <OtherCharacteristicsFilter />
            </Content>
        </Container>
    )
}

export default ProductsAside