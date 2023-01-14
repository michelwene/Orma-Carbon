import { Box } from "@components/Box";
import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Title } from "@components/Title";
import * as S from "./styles";
import { useRouter } from "next/router";

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
                <S.WrapperText onClick={() => router.push("/")}>
                  Deputados
                </S.WrapperText>
                <S.WrapperText onClick={() => router.push("/senadores")}>
                  Senadores
                </S.WrapperText>
                <S.WrapperText onClick={() => router.push("/favoritos")}>
                  Favoritos
                </S.WrapperText>
              </S.WrapperOptions>
            </Box>
          </Box>
        </Container>
      </S.Container>
      <S.Toolbar />
    </>
  );
}
