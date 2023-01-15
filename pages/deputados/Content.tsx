import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import { useFavorite } from "../../context/FavoritesContext";
import { Parliamentarian } from "../../types/Parlamentarian";
import * as S from "./styles";

interface HomeProps {
  data: Parliamentarian[];
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
          {data && data.length > 0 ? (
            data.map((item) => {
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
