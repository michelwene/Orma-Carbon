import { Header } from "@components/Header";
import * as S from "./styles";
import { LayoutProps } from "./types";

export function Layout({ children, theme, toggleTheme }: LayoutProps) {
  return (
    <S.Container>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
    </S.Container>
  );
}
