import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  column-gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.background.secondary};
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.info};
  transition: filter 0.2s;

  padding: 0.5rem 1rem;

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const LeftIcon = styled(AiOutlineLeft)`
  font-size: 1.5rem;
`;

export const RightIcon = styled(AiOutlineRight)`
  font-size: 1.5rem;
`;
