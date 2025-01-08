import React, { useState } from "react";
import styled from "styled-components";
import FilterTitle from "../../../atoms/filters-title";

const Container = styled.div`
  margin: 10px 0;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FilterOption = styled.span`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--dark-brown);
  }
`;

const ShowMoreButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: var(--dark-brown);
  text-decoration: underline;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

function Filter({ title, options, showMore = false }) {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedOptions = showMore ? (showAll ? options : options.slice(0, 3)) : options;

  return (
    <Container>
      <FilterTitle>{title}</FilterTitle>
      <FilterOptions>
        {displayedOptions.map((option, index) => (
          <FilterOption key={index}>
            {option}
          </FilterOption>
        ))}
      </FilterOptions>
      {showMore && options.length > 3 && (
        <ShowMoreButton onClick={handleShowMore}>
          {showAll ? "Mostrar menos" : "Mostrar mais"}
        </ShowMoreButton>
      )}
    </Container>
  );
}

function BrandFilter() {
  const brandOptions = ['3 Corações', 'NETCAFÉS', 'Orfeu', 'Pilão', 'Melita'];

  return (
    <Filter title="Marca" options={brandOptions} showMore={true} />
  );
}

function CategoryFilter() {
  const categoryOptions = ['Gourmet', 'Tradicional', 'Especial'];

  return (
    <Filter title="Categoria" options={categoryOptions} showMore={false} />
  );
}

function RoastFilter() {
  const roastOptions = ['Clara', 'Média', 'Escura'];

  return (
    <Filter title="Torra" options={roastOptions} showMore={false} />
  );
}

function GrindFilter() {
  const grindOptions = ['Grossa', 'Fina', 'Moído', 'Grão'];

  return (
    <Filter title="Moagem" options={grindOptions} showMore={false} />
  );
}

function OtherCharacteristicsFilter() {
  const characteristicsOptions = [
    'Sensorial', 'Altitude', 'Sabor', 'Notas', 'Corpo', 'Acidez', 'Amargor',
    'Doçura', 'Finalização', 'Aroma'
  ];

  return (
    <Filter title="Outras Características" options={characteristicsOptions} showMore={false} />
  );
} 

export { BrandFilter, CategoryFilter, RoastFilter, GrindFilter, OtherCharacteristicsFilter };
