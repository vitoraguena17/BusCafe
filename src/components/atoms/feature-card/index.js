import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(214, 205, 175, 0.5);
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    height: 300px;
    transition: .3s all;

    &:hover {
        transform: scale(1.02)
    }

    @media (max-width: 430px) {
        height: 200px;
    }
`;

const IconWrapper = styled.div`
    font-size: 4rem;
    margin-bottom: 10px;
`;

const FeatureTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: 400;
    margin: 5px 0;
`;

const Feature = styled.p`
    font-size: 1.2rem;
    color: #555;
`;

function FeatureCard({ icon: Icon, title, text }) {
    return (
        <Container>
            <IconWrapper>
                <Icon />
            </IconWrapper>
            <FeatureTitle>{title}</FeatureTitle>
            <Feature>{text}</Feature>
        </Container>
    );
}

export default FeatureCard;
