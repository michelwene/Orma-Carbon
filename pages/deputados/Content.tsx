import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import { IDeputados } from "@pages/deputados/types";
import { useFavorite } from "../../context/FavoritesContext";
import * as S from "./styles";

interface HomeProps {
  data: {
    dados: IDeputados[];
  };
}

export function Content({ data }: HomeProps) {
  const { favorites } = useFavorite();
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
          {data && data.dados.length > 0 ? (
            data.dados.map((item) => {
              const isFavorite = favorites.find((favorited) => {
                return favorited.id === item.id;
              });
              if (isFavorite) return;
              return <Card key={item.id} data={item} />;
            })
          ) : (
            <EmptyMessage text="Não foi encontrado nenhum deputado" />
          )}
        </S.WrapperCards>
      </Box>
    </Container>
  );
}
