import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import Head from "next/head";
import { useFavorite } from "../../context/FavoritesContext";
import { Content } from "./Content";

export default function Favorites() {
  const { favorites } = useFavorite();
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
        >
          <Content data={favorites} />
        </Box>
      </Container>
    </>
  );
}
