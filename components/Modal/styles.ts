import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface imageProps {
  src: string;
}

interface ModalProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 10;

  width: auto;
  height: auto;

  justify-content: center;
  align-items: center;

  display: ${({ isOpen }: ModalProps) => (isOpen ? "flex" : "none")};
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.shape};
  border-radius: 0.5rem;
  padding: 2rem;

  min-width: 50vw;
  min-height: 50vh;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagePreview = styled.div<imageProps>`
  width: 200px;
  height: 200px;
  background: url(${(props) => props.src}) center / contain no-repeat;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  border-radius: 50%;
  padding: 0.5rem;

  transition: background-color 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
    filter: brightness(0.8);
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 1.5rem;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 9;

  display: ${({ isOpen }: ModalProps) => (isOpen ? "block" : "none")};
`;
