import styled from "styled-components"
import Title from "../../../atoms/title"
import ProductSpecTable from "../../../atoms/spec-table"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    text-align: justify;
`

const TitleInfo = styled(Title)`
    margin: 10px 0 30px 0;
`

function ProductTable() {
    return (
        <Container>
            <TitleInfo>Especificações</TitleInfo>
            <ProductSpecTable />
        </Container>
    )
}

export default ProductTable