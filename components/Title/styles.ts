import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.large};
  color: ${({ theme }) => theme.text.info};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: center;
`;
