import styled from "styled-components";
import ProductImage from "../../atoms/product-img";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 25%;
  padding: 30px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 600px) {
    width: 90%;
    border-width: 1px;
    padding: 10px;
  }
`;

const ProductDesc = styled.div`
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  p {
    font-size: 0.8rem;
    font-weight: 300;

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--dark-green);

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;

function Product({ CustomCard }) {
  const CardComponent = CustomCard || Card;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/product");
  };

  const api = axios.create({
    baseURL: "https://168.75.77.79:5000/Product",
  });

  useEffect(() => {
    fetch("https://168.75.77.79:5000/Product")
      .then((data) => data.json())
      .then((data) => console.log(data));

    api
      .get("/Product")
      .then((res) => res.data)
      .then((data) => console.log(data));
  }, [api]);

  return (
    <CardComponent onClick={handleCardClick}>
      <ProductImage />
      <ProductDesc>
        <p>Café Austral - Moído - 500g</p>
        <ProductPrice>
          <p>A partir de:</p>
          <p>
            <span>R$ 49,99</span>
          </p>
        </ProductPrice>
      </ProductDesc>
    </CardComponent>
  );
}

export default Product;
