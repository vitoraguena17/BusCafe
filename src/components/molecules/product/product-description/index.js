import styled from "styled-components"
import Title from "../../../atoms/title"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    text-align: justify;
`

const ProductText = styled.div`
    width: 70%;
    margin-bottom: 50px;
  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 10px;

    @media (max-width: 430px) {
      font-size: 0.7rem; 
    }
  }
`

const TitleInfo = styled(Title)`
    margin: 10px 0 30px 0;
`

function ProductDescription() {
    return (
        <Container>
            <TitleInfo>Descrição</TitleInfo>
            <ProductText>
                <p>
                    O Café Austral - Moído é uma seleção especial de grãos cultivados nas montanhas de Minas Gerais, Brasil, uma das regiões mais tradicionais e respeitadas do mundo cafeeiro. Proveniente de uma pequena fazenda familiar com mais de 50 anos de experiência, esse café reflete a paixão e o cuidado de gerações dedicadas ao cultivo sustentável.
                </p>
                <p>   
                    Os grãos são da variedade Arábica, mais especificamente da subvariedade Catuaí Amarelo, conhecida por sua doçura natural e complexidade de sabor. Cultivados a uma altitude de 1.200 metros, os grãos são colhidos manualmente no auge da maturação, garantindo que apenas os melhores sejam selecionados. Após a colheita, o café passa pelo processo de secagem natural ao sol, onde os grãos são deixados com a casca para absorver as características únicas do terroir mineiro, resultando em uma doçura intensa e notas frutadas.
                </p>
                <p> 
                    A torra é média, um equilíbrio perfeito para destacar as nuances de sabor sem perder o corpo encorpado e a acidez suave. O Café Austral - Moído revela no aroma um toque envolvente de amêndoas torradas e baunilha, enquanto o sabor oferece uma experiência rica e bem balanceada, com notas de chocolate ao leite, castanha-do-pará e um toque frutado de pêssego e damasco. O corpo é cremoso e denso, preenchendo o paladar com uma sensação agradável e reconfortante. A acidez é moderada, com um toque cítrico suave que lembra a laranja madura, o que proporciona uma xícara equilibrada e fácil de beber.
                </p>
                <p> 
                    Com moagem média, o Café Austral - Moído é ideal para métodos de preparo como coador de papel, cafeteira italiana e prensa francesa, garantindo uma extração que preserva a riqueza e o frescor do café. O cuidado com a sustentabilidade também está presente: a fazenda utiliza práticas agrícolas responsáveis, respeitando o meio ambiente e garantindo condições de trabalho justas para seus colaboradores.
                </p>
                <p> 
                    Embalado em pacotes de 250g, o café é armazenado em embalagem de alumínio com válvula de frescor, o que mantém os aromas e sabores intactos por mais tempo. A embalagem, moderna e minimalista, é totalmente reciclável, refletindo o compromisso com a redução de impactos ambientais.
                </p>
                <p> 
                    O Café Austral - Moído é perfeito para qualquer ocasião, seja para começar o dia com uma xícara marcante ou para uma pausa relaxante à tarde. Seu perfil equilibrado e envolvente faz dele uma excelente escolha para quem aprecia o verdadeiro sabor do café brasileiro, proporcionando uma experiência sensorial única em cada xícara.
                </p>
            </ProductText>
        </Container>
    )
}

export default ProductDescription