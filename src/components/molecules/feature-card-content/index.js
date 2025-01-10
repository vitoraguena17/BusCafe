import { PiCoffeeLight, PiCoffeeBeanLight, PiCubeLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import FeatureCard from "../../atoms/feature-card";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 50%;
    margin-bottom: 35px;

    @media (max-width: 430px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        width: 80%;
    }
`;  

function CardContent() {
    return (
        <Container>
            <FeatureCard icon={PiCoffeeLight} title="Categoria" text="Gourmet" />
            <FeatureCard icon={PiCoffeeBeanLight} title="Torra" text="Média" />
            <FeatureCard icon={PiCubeLight} title="Doçura" text="Intensa" />
            <FeatureCard icon={CiLocationOn} title="Origem" text="MG" />
        </Container>
    );
}

export default CardContent;
