import styled from "styled-components";
import DropDown from "../../atoms/drop-down";

const SelectContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    margin-top: 20px;
`

function ProductsSelect() {
    return (
        <SelectContent>
            <p>Ordenar por:</p>
            <DropDown name="filters">
                <option value="relevante">Mais relevantes</option>
                <option value="recente">Recentes</option>
                <option value="maior">Maior Preço</option>
                <option value="menor">Menor Preço</option>
            </DropDown>
        </SelectContent>
    )
}

export default ProductsSelect