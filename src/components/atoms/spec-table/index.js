import styled from "styled-components"

const SpecsTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 50px;
  font-size: 1.1rem;
  th, td {
  border: 1px solid;
  padding: 0 5px;
  }
  th {
  text-align: center;
  }

  @media (max-width: 430px) {
      width: 100%;
      font-size: 0.88rem; 
  }
`

function ProductSpecTable() {
  return (
    <SpecsTable>
      <tr>
        <th>Nome do produto</th>
        <td>Café Austral - Moído</td>
      </tr>
      <tr>
        <th>Preço máximo</th>
        <td>R$ 159,99</td>
      </tr>
      <tr>
        <th>Preço mínimo</th>
        <td>R$ 129,90</td>
      </tr>
      <tr>
        <th>Peso</th>
        <td>100g, 250g, 500g e 1kg</td>
      </tr>
      <tr>
        <th>Categoria</th>
        <td>Gourmet</td>
      </tr>
      <tr>
        <th>Variedade</th>
        <td>Catuai, bourbon e rubi</td>
      </tr>
      <tr>
        <th>Processo</th>
        <td>Natural ou cereja descascada</td>
      </tr>
      <tr>
        <th>Torra</th>
        <td>Clara</td>
      </tr>
      <tr>
        <th>Sensorial</th>
        <td>Corpo sedoso e doçura intensa</td>
      </tr>
      <tr>
        <th>Altitude</th>
        <td>1150m</td>
      </tr>
      <tr>
        <th>Sabor</th>
        <td>Frutas amarelas e chocolate</td>
      </tr>
      <tr>
        <th>Notas</th>
        <td>Chocolate e nozes</td>
      </tr>
      <tr>
        <th>Corpo</th>
        <td>Encorpado</td>
      </tr>
      <tr>
        <th>Acidez</th>
        <td>Média alta</td>
      </tr>
      <tr>
        <th>Amargor</th>
        <td>-</td>
      </tr>
      <tr>
        <th>Doçura</th>
        <td>Intensa</td>
      </tr>
      <tr>
        <th>Finalização</th>
        <td>Prolongada e doce</td>
      </tr>
      <tr>
        <th>Aroma</th>
        <td>Intenso</td>
      </tr>
      <tr>
        <th>Moagem</th>
        <td>Grossa</td>
      </tr>
      <tr>
        <th>Pontuação BSCA</th>
        <td>80 a 84</td>
      </tr>
      <tr>
        <th>Local do café</th>
        <td>Cerrado mineiro</td>
      </tr>
      <tr>
        <th>Local da torrefação</th>
        <td>MG</td>
      </tr>
    </SpecsTable>
  )
}

export default ProductSpecTable