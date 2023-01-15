import { Box } from "@components/Box";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { EmptyMessage } from "@components/EmptyMessage";
import InputSearch from "@components/InputSearch";
import { apiSenate } from "@services/api";
import Head from "next/head";
import { Content } from "./Content";
import { SenatorProps } from "./types";
import { useState, useEffect, useMemo } from "react";
import useDebounce from "@hooks/useDebounce";

export default function Senators({ data }: SenatorProps) {
  const [keyword, setKeyword] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);

  const dataFormatted = useMemo(() => {
    return data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.map(
      (item) => ({
        email: item.IdentificacaoParlamentar.EmailParlamentar,
        id: item.IdentificacaoParlamentar.CodigoParlamentar,
        idLegislatura: item.IdentificacaoParlamentar.CodigoPublicoNaLegAtual,
        nome: item.IdentificacaoParlamentar.NomeCompletoParlamentar,
        siglaPartido: item.IdentificacaoParlamentar.SiglaPartidoParlamentar,
        siglaUf: item.IdentificacaoParlamentar.UfParlamentar,
        uri: item.IdentificacaoParlamentar.UrlPaginaParlamentar,
        urlFoto: item.IdentificacaoParlamentar.UrlFotoParlamentar,
        parlamentarianType: "Senador",
      })
    );
  }, [data]);

  const filteredValue = dataFormatted.filter((item) => {
    return item.nome.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Senadores</title>
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
          <Content data={keyword.length > 0 ? filteredValue : dataFormatted} />
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await apiSenate.get("/lista/atual");

  return {
    props: {
      data,
    },
  };
}
