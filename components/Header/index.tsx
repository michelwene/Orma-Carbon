import { Box } from "@components/Box";
import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Title } from "@components/Title";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <Container maxWidth="md">
        <Box displayFlex alignItems="center">
          <Logo />
          <Box justifySelf="center" fullWidth>
            <Title title="Lista de deputados e senadores" />
          </Box>
        </Box>
      </Container>
    </S.Container>
  );
}
