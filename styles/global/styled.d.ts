import { darkTheme, lightTheme } from "./theme";
import "styled-components";

declare module "styled-components" {
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}
