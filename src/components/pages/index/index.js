import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import IndexHero from '../../organisms/index-hero';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`

function IndexPage() {
    return (
        <Container>
            <Header />
            <IndexHero />
            <Footer />
        </Container>
    )
}

export default IndexPage