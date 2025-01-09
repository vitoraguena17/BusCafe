import styled from 'styled-components';
import ProductImg1 from '../../../images/products/pacote-austral-02.png';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 25%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 430px) {
    width: 90%; 
    padding: 20px; 
    border-width: 1px;
  }
`;

const ProductImg = styled.img`
  background-color: rgba(214, 205, 175, 0.5);
  width: 95%;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 430px) {
    width: 80%; 
    padding: 20px; 
  }
`;

const ProductDesc = styled.div`
  margin-top: 20px;

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

    @media (max-width: 430px) {
      font-size: 0.7rem; 
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--dark-green);

    @media (max-width: 430px) {
      font-size: 1.2rem; 
    }
  }
`;

function Product({ CustomCard }) {
  const CardComponent = CustomCard || Card; 

  return (
    <CardComponent>
      <ProductImg src={ProductImg1} alt="Pacote de Café" />
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

