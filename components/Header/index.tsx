import { Box } from "@components/Box";
import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Title } from "@components/Title";
import * as S from "./styles";
import { useRouter } from "next/router";
import { ActiveLink } from "@components/ActiveLink";

export function Header() {
  const router = useRouter();
  return (
    <>
      <S.Container>
        <Container maxWidth="md">
          <Box displayFlex alignItems="center">
            <Logo />
            <Box justifySelf="center" fullWidth>
              <S.WrapperOptions>
                <ActiveLink href="/">Deputados</ActiveLink>
                <ActiveLink href="/senadores">Senadores</ActiveLink>
                <ActiveLink href="/favoritos">Favoritos</ActiveLink>
              </S.WrapperOptions>
            </Box>
          </Box>
        </Container>
      </S.Container>
      <S.Toolbar />
    </>
  );
}
