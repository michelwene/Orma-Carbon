import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

export const ButtonDarkTheme = styled.button`
  position: fixed;
  top: 3rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconSun = styled(BsSun)``;

export const IconMoon = styled(BsMoon)``;
