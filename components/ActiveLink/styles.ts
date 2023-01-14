import styled from "styled-components";

export const Link = styled.a`
  font-size: ${(props) => props.theme.size.regular};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.text.info};
  font-weight: 500;

  transition: all 1s ease;

  &:hover {
    cursor: pointer;
  }
`;
