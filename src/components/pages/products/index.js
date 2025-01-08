import Footer from "../../organisms/footer"
import Header from "../../organisms/header"
import styled from "styled-components"
import ProductsHero from "../../organisms/products-hero"

const Container = styled.section `
    width: 100%;
`

function ProductsPage() {
    return (
        <Container>
            <Header />
            <ProductsHero />
            <Footer />
        </Container>
    )
}

export default ProductsPage