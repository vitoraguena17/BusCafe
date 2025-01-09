import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--dark-brown);
  font-size: 1.3rem;
  user-select: none;
  margin: 20px 0px 50px 0;

  span, a {
    color: var(--dark-brown);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
  }
`;

function PaginationText() {
  return (
    <PaginationWrapper>
      <span>Primeira</span>
      <span>&lt;</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>...</span>
      <span>&gt;</span>
      <span>Última</span>
    </PaginationWrapper>
  );
}

export default PaginationText;