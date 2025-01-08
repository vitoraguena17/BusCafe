import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';


const ProductsContainer = styled.div`
    width: 100%;
`

function Products() {
    return (
        <ProductsContainer>
            <Header />
            <Footer />
        </ProductsContainer>
    )
}