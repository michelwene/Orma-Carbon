import Head from "next/head";
import { apiCongress } from "@services/api";
import { AppHomeProps, Link } from "./types";
import { Content } from "./Content";
import { Parliamentarian } from "../../types/Parlamentarian";
import { useState, useMemo, useEffect } from "react";
import useDebounce from "@hooks/useDebounce";
import { Container } from "@components/Container";
import { Box } from "@components/Box";
import InputSearch from "@components/InputSearch";
import { Pagination } from "@components/Pagination";
import { Loader } from "@components/Loader/styles";
import { Select } from "@components/Select";
import * as S from "./styles";

export default function AppHome({ data }: AppHomeProps) {
  const [keyword, setKeyword] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);
  const [parlamentarians, setParlamentarians] = useState<Parliamentarian[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [politicalParty, setPoliticalParty] = useState("");

  const dataFormattedServerSide = useMemo(() => {
    return data.dados.map((item) => ({
      ...item,
      parlamentarianType: "Deputado",
    }));
  }, [data]);

  useEffect(() => {
    setParlamentarians(dataFormattedServerSide);
  }, [data]);

  async function handleFilterByPoliticalParty(value: string) {
    try {
      setIsLoading(true);
      setPoliticalParty(value);
      const { data } = await apiCongress.get("/deputados", {
        params: {
          itens: 15,
          pagina: 1,
          siglaPartido: value,
          nome: keyword,
        },
      });
      const dataFormatted = data.dados.map((item: Parliamentarian) => ({
        ...item,
        parlamentarianType: "Deputado",
      }));
      const totalPages = data.links
        .find((item: Link) => item.rel === "last")
        ?.href.split("pagina=")[1]
        .split("&")[0];
      setTotalPages(Number(totalPages));
      setParlamentarians(dataFormatted);
      setPage(1);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSwitchPage(type: "next" | "previous") {
    try {
      setIsLoading(true);
      const { data } = await apiCongress.get("/deputados", {
        params: {
          itens: 15,
          pagina: type === "next" ? page + 1 : page - 1,
          siglaPartido: politicalParty,
          nome: keyword,
        },
      });
      const dataFormatted = data.dados.map((item: Parliamentarian) => ({
        ...item,
        parlamentarianType: "Deputado",
      }));

      const totalPages = data.links
        .find((item: Link) => item.rel === "last")
        ?.href.split("pagina=")[1]
        .split("&")[0];
      setTotalPages(Number(totalPages));
      setParlamentarians(dataFormatted);
      setPage((prev) => (type === "next" ? prev + 1 : prev - 1));
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setParlamentarians(dataFormattedServerSide);
  }, []);

  useEffect(() => {
    handleFilterByPoliticalParty(politicalParty);
  }, [debouncedSearchTerm]);

  const filteredValue = parlamentarians.filter((item) => {
    return item.nome.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
  });

  const listAllPoliticalParties = dataFormattedServerSide.reduce(
    (acc, item) => {
      if (!acc.includes(item.siglaPartido)) {
        acc.push(item.siglaPartido);
      }
      return acc;
    },
    [] as string[]
  );

  const totalPagesPagination =
    data && data.dados.length > 0
      ? keyword.length > 0 || politicalParty.length > 0
        ? totalPages
        : data.links
            .find((item) => item.rel === "last")
            ?.href.split("pagina=")[1]
            .split("&")[0]
      : 0;

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
          <S.WrapperFilters>
            <InputSearch
              name="search"
              label="Pesquisar"
              placeholder="Digite o nome do deputado"
              type="text"
              fullWidth
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Select
              label="Selecione um partido"
              onChange={(e) => handleFilterByPoliticalParty(e.target.value)}
              value={politicalParty}
              options={listAllPoliticalParties}
            />
          </S.WrapperFilters>
          {isLoading ? (
            <Box
              fullWidth
              displayFlex
              alignItems="center"
              justifyContent="center"
              margin="2rem 0 0 0"
            >
              <Loader />
            </Box>
          ) : (
            <Content
              data={keyword.length > 0 ? filteredValue : parlamentarians}
            />
          )}
          {parlamentarians.length > 0 && (
            <Pagination
              nextPage={() => handleSwitchPage("next")}
              previousPage={() => handleSwitchPage("previous")}
              page={page}
              buttonNextDisabled={page === totalPagesPagination}
            />
          )}
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
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
  } catch (err) {
    console.log(err);

    return {
      props: {
        data: {
          dados: [],
        },
      },
    };
  }
}
