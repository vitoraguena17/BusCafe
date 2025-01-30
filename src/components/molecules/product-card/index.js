import styled from "styled-components";
import ProductImage from "../../atoms/product-img";
import { useNavigate } from "react-router-dom";

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

  @media (max-width: 430px) {
    width: 90%;
    border-width: 1px;
    padding: 10px;
  }
`;

const ProductDesc = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (max-width: 430px) {
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
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--dark-green);
  }
`;

const ProductBrand = styled.p`
  font-weight: 500;
`


function Product({ product, CustomCard }) {
  const CardComponent = CustomCard || Card;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/product");
  };

  return (
    <CardComponent onClick={handleCardClick}>
      <ProductImage />
      <ProductDesc>
        <ProductBrand>{product.brand}</ProductBrand>
        <p>{product.productName}</p>
        <ProductPrice>
          <p>A partir de:</p>
          <p>
            <span>R$ {product.minPrice.toFixed(2)}</span>
          </p>
        </ProductPrice>
      </ProductDesc>
    </CardComponent>
  );
}

export default Product;
