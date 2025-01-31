import styled from 'styled-components';
import GridArea from '../../molecules/grid-area';

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
`

function IndexHero() {
    return (
        <Container>
            <GridArea />
        </Container>
    )
}

export default IndexHero