import React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  displayFlex?: boolean;
  columnGap?: string;
  rowGap?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  justifySelf?: "center" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end";
  alignSelf?: "center" | "flex-start" | "flex-end";
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
