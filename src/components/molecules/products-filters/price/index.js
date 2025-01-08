import styled from "styled-components"
import FilterTitle from '../../../atoms/filters-title'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`

const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const PriceOption = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  transition: .3s ease-in-out;

  &:hover {
    color: var(--dark-brown);
  }
`

const CustomRange = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`

const Input = styled.input`
  width: 90px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--dark-brown);
  }
`

const Separator = styled.span`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
`

function PriceFilter() {

    return (
        <Container>
            <FilterTitle>Preço</FilterTitle>
            <PriceRange>
                <PriceOption>Até R$ 15</PriceOption>
                <PriceOption>R$ 35 a R$ 50</PriceOption>
                <PriceOption>Mais de R$ 50</PriceOption>
            </PriceRange>
            <CustomRange>
                <Input
                    type="number"
                    placeholder="Mínimo"
                    name="mínimo"
                />
                <Separator>—</Separator>
                <Input
                    type="number"
                    placeholder="Máximo"
                    name="máximo"
                />
            </CustomRange>
        </Container>
    );
}

export default PriceFilter;
