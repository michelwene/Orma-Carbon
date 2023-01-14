import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import * as S from "./styles";

interface ContentProps {
  data: {
    email: string | null;
    id: number | string;
    idLegislatura: number | string;
    nome: string;
    siglaPartido: string;
    siglaUf: string;
    uri?: string;
    uriPartido?: string;
    urlFoto: string;
  }[];
}

export function Content({ data }: ContentProps) {
  return (
    <Container maxWidth="md">
      <Box
        margin="2rem 0 0 0"
        displayFlex
        alignItems="center"
        justifyContent="center"
        columnGap="1rem"
      >
        <S.WrapperCards>
          {data && data.length > 0 ? (
            data.map((item) => <Card key={item.id} data={item} />)
          ) : (
            <EmptyMessage text="Não há nenhum parlamentar favoritado" />
          )}
        </S.WrapperCards>
      </Box>
    </Container>
  );
}
