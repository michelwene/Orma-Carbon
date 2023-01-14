import React from "react";
import * as S from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export function Container({ children, maxWidth }: ContainerProps) {
  return <S.Container maxWidth={maxWidth}>{children}</S.Container>;
}
