import styled from "styled-components";

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  row-gap: 1rem;

  padding: 1rem 0;
`;

export const WrapperFilters = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;

  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
    row-gap: 1rem;
    align-items: flex-start;
  }

  @media (min-width: 621px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
