import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';


const ProductContainer = styled.div`
    width: 100%;
`

function Products() {
    return (
        <ProductContainer>
            <Header />
            
            <Footer />
        </ProductContainer>
    )
}