import React from "react";
import * as S from "./styles";
import { BoxProps } from "./types";

export function Box({
  children,
  displayFlex,
  flexDirection,
  justifyContent,
  justifySelf,
  columnGap,
  rowGap,
  alignItems,
  fullHeight,
  fullWidth,
  width,
  height,
  padding,
  margin,
  backgroundColor,
  borderRadius,
  position,
  alignSelf,
  ...rest
}: BoxProps) {
  return (
    <S.Container
      {...{
        displayFlex,
        flexDirection,
        justifyContent,
        alignItems,
        fullHeight,
        fullWidth,
        width,
        height,
        padding,
        margin,
        backgroundColor,
        borderRadius,
        columnGap,
        rowGap,
        position,
        alignSelf,
        justifySelf,
      }}
      {...rest}
    >
      {children}
    </S.Container>
  );
}
