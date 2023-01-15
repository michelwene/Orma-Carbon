import styled from "styled-components";

interface InputProps {
  fullWidth?: boolean;
}

export const Label = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.size.regular};

  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Input = styled.input`
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.text.primary};
  border: none;

  min-width: 300px;

  border-radius: 8px;

  width: ${({ fullWidth }: InputProps) => (fullWidth ? "100%" : "auto")};

  &:focus {
    outline: none;
  }
`;
