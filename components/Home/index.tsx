import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { IDeputados } from "@pages/deputados/types";
import * as S from "./styles";

interface HomeProps {
  data: IDeputados[];
}

export function Home({ data }: HomeProps) {
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
          {data && data.map((item) => <Card key={item.id} data={item} />)}
        </S.WrapperCards>
      </Box>
    </Container>
  );
}
