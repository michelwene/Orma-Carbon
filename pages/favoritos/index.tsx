import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import Head from "next/head";

export default function Favorites() {
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
          {/* <Card /> */}
        </Box>
      </Container>
    </>
  );
}
