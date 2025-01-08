import styled from 'styled-components';
import Menu from '../../molecules/index-menu';
import GridArea from '../../molecules/grid-area';

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
`

function Hero() {
    return (
        <Container>
            <Menu />
            <GridArea />
        </Container>
    )
}

export default Hero