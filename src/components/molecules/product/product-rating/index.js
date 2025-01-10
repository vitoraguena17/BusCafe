import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;    
`

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 300;
`

const StarGrid = styled.div`
    display: flex;
    flex-direction: row;
    color: #F8D100;
    font-size: 1.2rem;
    gap: 5px;
`

const RatingButton = styled.button`
    border: none;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: 300;
    opacity: .8;
    cursor: pointer;
    background-color: transparent;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.03);
        color: var(--dark-brown);
        opacity: 1;
    }
`

function ProductRating() {
    return (    
        <Container>
            <p>Avaliação:</p>
            <Content>
                <StarGrid>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                </StarGrid>
                <p>4.8 (214)</p>
                <RatingButton>Avaliar produto</RatingButton>
            </Content>
        </Container>
    )
}

export default ProductRating