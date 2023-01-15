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

export const WrapperFilters = styled.select`
  min-width: 200px;
  height: 47px;

  outline: none;
  border: none;
  border-radius: 8px;

  padding: 0 1rem;
`;
