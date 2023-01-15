import React from "react";
import * as S from "./styles";
import { ContainerProps } from "./types";

export function Container({ children, maxWidth }: ContainerProps) {
  return <S.Container maxWidth={maxWidth}>{children}</S.Container>;
}
