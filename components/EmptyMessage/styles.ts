import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 2rem 0;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text.info};
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.primary};
`;
