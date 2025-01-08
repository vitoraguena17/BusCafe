import styled from 'styled-components';

const Resources = styled.div`
    color: var(--dark-beige);
    width: 30%;
`

const FooterTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
`

const Options = styled.ul`
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    cursor: pointer;
`

const Option = styled.li`
    margin: 10px 0;
`

const textOptions = ['Lojas', 'Guia Buscafé', 'Sobre', 'Adicionar Itens', 'Doações']

function FooterResources() {
    return (
        <Resources>
            <FooterTitle>Recursos:</FooterTitle>
            <Options>
                {textOptions.map((texto) => (
                    <Option><p>{texto}</p></Option>))}
            </Options>
        </Resources>
    )
}

export default FooterResources