import styled from "styled-components";
import { TextProps } from "./types";

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme, variant = "h1" }) => theme.fonts.variant[variant]};
  color: ${({ theme }) => theme.text.info};
  font-weight: ${({ variant }) => {
    switch (variant) {
      case "h1":
      case "h2":
        return 700;
      case "h3":
      case "h4":
        return 600;
      case "h5":
      case "h6":
        return 500;
      default:
        return 500;
    }
  }};
`;
