import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  padding: 0.5rem 2rem;
  border: none;
  border-radius: 18px;

  font-size: ${({ theme }) => theme.size.regular};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-width: ${({ width }) => width};

  color: ${({ theme, color, variant }) => {
    if (color === "primary" || variant === "contained") {
      return theme.text.primary;
    }

    return theme.text.secondary;
  }};
  background-color: ${({ theme, color, variant }) => {
    if (color === "primary" || variant === "contained") {
      return theme.background.primary;
    }

    return theme.background.secondary;
  }};

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  &:focus {
    outline: none;
  }
`;

export const IconLoading = styled(AiOutlineLoading)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s linear infinite;
`;
