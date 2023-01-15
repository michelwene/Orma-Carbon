import Head from "next/head";
import { apiCongress } from "@services/api";
import { AppHomeProps } from "./types";
import { Content } from "./Content";
import { Parliamentarian } from "../../types/Parlamentarian";
import { useState, useMemo } from "react";
import useDebounce from "@hooks/useDebounce";
import { Container } from "@components/Container";
import { Box } from "@components/Box";
import InputSearch from "@components/InputSearch";

export default function AppHome({ data }: AppHomeProps) {
  const [keyword, setKeyword] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);

  const dataFormatted = useMemo(() => {
    return data.dados.map((item) => ({
      ...item,
      parlamentarianType: "Deputado",
    }));
  }, [data]);

  const filteredValue = dataFormatted.filter((item) => {
    return item.nome.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
  });

  async function handleSwitchPage(link: string) {
    const { data } = await apiCongress.get(link, {
      params: {
        itens: 15,
      },
    });
    console.log(data);
  }

  console.log(data);
  return (
    <>
      <Head>
        <title>Deputados</title>
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
            placeholder="Digite o nome do deputado"
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
  const {
    data,
  }: {
    data: Parliamentarian[];
  } = await apiCongress.get("/deputados", {
    params: {
      itens: 15,
    },
  });
  return { props: { data } };
}
