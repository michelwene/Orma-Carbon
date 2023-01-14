import styled from "styled-components";

interface ContainerProps {
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export const Container = styled.div<ContainerProps>`
  width: ${({ maxWidth }) => {
    switch (maxWidth) {
      case "sm":
        return "600px";
      case "md":
        return "960px";
      case "lg":
        return "1280px";
      case "xl":
        return "1920px";
      default:
        return "100%";
    }
  }};
  margin: 0 auto;
  padding: ${({ maxWidth }) => {
    switch (maxWidth) {
      case "sm":
        return "0 16px";
      case "md":
        return "0 24px";
      case "lg":
        return "0 32px";
      case "xl":
        return "0 40px";
      default:
        return "0";
    }
  }};
`;
