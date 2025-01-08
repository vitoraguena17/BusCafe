import Footer from "../../organisms/footer"
import Header from "../../organisms/header"
import styled from "styled-components"

const Container = styled.section `
    width: 100%;
`

function ProductsPage() {
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

export default ProductsPage