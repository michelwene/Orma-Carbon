import { Header } from "@components/Header";
import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
}

export function Layout({ children, theme, toggleTheme }: LayoutProps) {
  return (
    <S.Container>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
    </S.Container>
  );
}
