import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import { useFavorite } from "../../context/FavoritesContext";
import { ContentProps, Parliamentarian } from "../../types/Parlamentarian";
import * as S from "./styles";

export function Content({ data }: ContentProps) {
  const { favorites } = useFavorite();
  return (
    <Box
      margin="2rem 0 0 0"
      displayFlex
      alignItems="center"
      justifyContent="center"
      columnGap="1rem"
      fullWidth
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
  );
}
