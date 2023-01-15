import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.text.primary};
  font-size: ${({ theme }) => theme.size.regular};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
