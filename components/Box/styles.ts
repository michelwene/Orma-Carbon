import styled from "styled-components";

interface BoxProps {
  displayFlex?: boolean;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  justifySelf?: "center" | "flex-start" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end";
  alignSelf?: "center" | "flex-start" | "flex-end";
  columnGap?: string;
  rowGap?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  position?: "absolute" | "relative";
}

export const Container = styled.div<BoxProps>`
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  justify-self: ${(props) => props.justifySelf};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  width: ${(props) => (props.fullWidth ? "100%" : props.width)};
  height: ${(props) => (props.fullHeight ? "100%" : props.height)};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  position: ${(props) => props.position};
`;
