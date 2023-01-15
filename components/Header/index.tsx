import { Box } from "@components/Box";
import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import * as S from "./styles";
import { ActiveLink } from "@components/ActiveLink";
import { ButtonDarkTheme } from "@components/ButtonDarkTheme";
import { HeaderProps } from "./types";

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <>
      <S.Container>
        <Container maxWidth="md">
          <Box displayFlex alignItems="center">
            <Logo />
            <Box justifySelf="center" fullWidth>
              <S.WrapperOptions>
                <ActiveLink href="/deputados">Deputados</ActiveLink>
                <ActiveLink href="/senadores">Senadores</ActiveLink>
                <ActiveLink href="/favoritos">Favoritos</ActiveLink>
              </S.WrapperOptions>
            </Box>
            <ButtonDarkTheme theme={theme} onClick={toggleTheme} />
          </Box>
        </Container>
      </S.Container>
      <S.Toolbar />
    </>
  );
}
