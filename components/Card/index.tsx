import { Box } from "@components/Box";
import { Text } from "@components/Text/styles";
import * as S from "./styles";

export function Card() {
  return (
    <S.CardContainer>
      <S.CardLogo src="https://www.camara.leg.br/internet/deputado/bandep/204554.jpg" />
      <S.CardInfo>
        <Box>
          <Box>
            <Text variant="caption">Nome:</Text>
            <Text variant="subtitle">Abílio Santana</Text>
          </Box>
          <Box margin="1rem 0 0 0">
            <Text variant="caption">Sigla Partido:</Text>
            <Text variant="subtitle">PSC</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text variant="caption">Sigla UF:</Text>
            <Text variant="subtitle">BA</Text>
          </Box>
          <Box margin="1rem 0 0 0">
            <Text variant="caption">Detalhes:</Text>
            <S.MoreInfo>Ver mais...</S.MoreInfo>
          </Box>
        </Box>
      </S.CardInfo>
    </S.CardContainer>
  );
}
