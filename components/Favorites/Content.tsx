import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { EmptyMessage } from "@components/EmptyMessage";
import { ContentProps } from "../../types/Parlamentarian";
import * as S from "./styles";

export function Content({ data }: ContentProps) {
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
          data.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <EmptyMessage text="Não há nenhum parlamentar favoritado" />
        )}
      </S.WrapperCards>
    </Box>
  );
}
