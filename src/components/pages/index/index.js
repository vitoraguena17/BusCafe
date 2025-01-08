import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import Hero from '../../organisms/index-hero';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`

function IndexPage() {
    return (
        <Container>
            <Header />
            <Hero />
            <Footer />
        </Container>
    )
}

export default IndexPage