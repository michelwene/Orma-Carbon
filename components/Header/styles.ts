import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.background.secondary};
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 70px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Toolbar = styled.div`
  height: 70px;
`;

export const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;

export const WrapperText = styled.p`
  font-size: ${(props) => props.theme.size.regular};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.text.info};
  font-weight: 500;

  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;

    filter: brightness(0.8);
  }
`;
