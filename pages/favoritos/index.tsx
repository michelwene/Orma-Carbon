import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import Head from "next/head";
import { useFavorite } from "../../context/FavoritesContext";
import { Content } from "./Content";
import { useState } from "react";
import useDebounce from "@hooks/useDebounce";
import InputSearch from "@components/InputSearch";

export default function Favorites() {
  const { favorites } = useFavorite();
  const [keyword, setKeyword] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);

  const filteredValue = favorites.filter((item) => {
    return item.nome.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Favoritos</title>
      </Head>
      <Container maxWidth="md">
        <Box
          margin="2rem 0 0 0"
          displayFlex
          alignItems="center"
          justifyContent="center"
          columnGap="1rem"
          flexDirection="column"
        >
          <InputSearch
            name="search"
            label="Pesquisar"
            placeholder="Digite o nome do senador"
            type="text"
            fullWidth
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Content data={keyword.length > 0 ? filteredValue : favorites} />
        </Box>
      </Container>
    </>
  );
}
