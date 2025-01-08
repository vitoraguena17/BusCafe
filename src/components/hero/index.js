import styled from 'styled-components';
import Menu from './menu';
import ProductGrid from './product-grid';
import Title from '../Title';
import Button from '../button';

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vw;
`

const TitleMargin = styled(Title)`
    margin-bottom: 20px; 
`

const SeeMore = styled(Button)`
    width: 400px;
    height: 50px;
    margin: 30px 0 80px 0 ;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--dark-beige);
    background-color: var(--dark-brown);

    &:hover {
        border: 1px solid var(--dark-brown);
        color: var(--dark-brown);
    }

    @media (max-width: 430px) {
        width: 250px;
    }
`

function Hero() {
    return (
        <Container>
            <Menu />
            <TitleMargin>Novidades</TitleMargin>
            <ProductGrid />
            <ProductGrid />
            <SeeMore>Ver mais produtos</SeeMore>
        </Container>
    )
}

export default Hero