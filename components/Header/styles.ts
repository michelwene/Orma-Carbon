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
