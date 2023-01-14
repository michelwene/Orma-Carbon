import { Box } from "@components/Box";
import Button from "@components/Button";
import { Text } from "@components/Text/styles";
import { IDeputados } from "@pages/deputados/types";
import * as S from "./styles";
import { Card } from "./types";

interface CardProps {
  data: Card;
}

export function Card({ data }: CardProps) {
  return (
    <S.CardContainer>
      <S.CardLogo src={data.urlFoto} />
      <S.CardInfo>
        <Box displayFlex columnGap="1rem">
          <Box width="200px">
            <Box>
              <Text variant="caption">Nome:</Text>
              <Text variant="subtitle">{data.nome}</Text>
            </Box>
            <Box margin="1rem 0 0 0">
              <Text variant="caption">Sigla Partido:</Text>
              <Text variant="subtitle">{data.siglaPartido}</Text>
            </Box>
          </Box>
          <Box width="200px">
            <Box>
              <Text variant="caption">Email:</Text>
              <Text variant="subtitle">{data.email || " - "}</Text>
            </Box>
            <Box margin="1rem 0 0 0">
              <Text variant="caption">Sigla UF:</Text>
              <Text variant="subtitle">{data.siglaUf}</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            style={{
              textAlign: "right",
            }}
          >
            <Text variant="caption">Detalhes:</Text>
            <S.MoreInfo>Ver mais...</S.MoreInfo>
          </Box>
          <Box margin="1rem 0 0 0">
            <Button type="button" variant="outlined">
              Favoritar
              <S.Icon />
            </Button>
          </Box>
        </Box>
      </S.CardInfo>
    </S.CardContainer>
  );
}
