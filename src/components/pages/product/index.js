import Footer from "../../organisms/footer"
import Header from "../../organisms/header"
import styled from "styled-components"
import ProductHero from "../../organisms/product-hero"

const Container = styled.section `
    width: 100%;
`

function ProductPage() {
    return (
        <Container>
            <Header />
            <ProductHero />
            <Footer />
        </Container>
    )
}

export default ProductPage