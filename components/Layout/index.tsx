import { Header } from "@components/Header";
import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}
