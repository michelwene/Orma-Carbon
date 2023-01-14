import React from "react";
import * as S from "./styles";

interface BoxProps {
  children: React.ReactNode;
  displayFlex?: boolean;
  columnGap?: string;
  rowGap?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  position?: "relative" | "absolute";
}

export function Box({
  children,
  displayFlex,
  flexDirection,
  justifyContent,
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
      }}
    >
      {children}
    </S.Container>
  );
}
