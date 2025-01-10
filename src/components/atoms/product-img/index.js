import styled from "styled-components";
import ProductImg1 from '../../../images/products/pacote-austral-02.png';

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

function ProductImage({className}) {
    return (
        <ProductImg src={ProductImg1} alt="Pacote de Café" className={className}/>
    )
}

export default ProductImage