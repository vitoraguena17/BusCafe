import styled from "styled-components";
import Title from "../../../atoms/title";
import ProductSpecTable from "../../../atoms/spec-table";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  text-align: justify;
`;

const TitleInfo = styled(Title)`
  margin: 10px 0 30px 0;
  width: 70%;
  text-align: center;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    width: 90%;
  }
`;

function ProductTable() {
  return (
    <Container>
      <Content>
        <TitleInfo>Especificações</TitleInfo>
        <ProductSpecTable />
      </Content>
    </Container>
  );
}

export default ProductTable;
