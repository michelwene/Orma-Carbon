import { Box } from "@components/Box";
import { Container } from "@components/Container";
import InputSearch from "@components/InputSearch";
import { apiSenate } from "@services/api";
import Head from "next/head";
import { Content } from "./Content";
import { SenatorProps } from "./types";
import { useState, useEffect, useMemo } from "react";
import useDebounce from "@hooks/useDebounce";
import { Parliamentarian } from "../../types/Parlamentarian";
import { Pagination } from "@components/Pagination";
import * as S from "./styles";
import { Select } from "@components/Select";

export default function Senators({ data }: SenatorProps) {
  const [keyword, setKeyword] = useState("");
  const [politicalParty, setPoliticalParty] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);
  const [parlamentarians, setParlamentarians] = useState<Parliamentarian[]>([]);
  const [page, setPage] = useState(1);

  const dataFormattedServerSide = useMemo(() => {
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

  function handlePreviousPage() {
    if (keyword.length > 0 || politicalParty.length > 0) {
      const dataPaginated = parlamentarians.slice(
        15 * (page - 2),
        15 * (page - 1)
      );
      setParlamentarians(dataPaginated);
      setPage((prev) => prev - 1);
      return;
    }
    const dataPaginated = dataFormattedServerSide.slice(
      15 * (page - 2),
      15 * (page - 1)
    );
    setParlamentarians(dataPaginated);
    setPage((prev) => prev - 1);
  }

  function handleNextPage() {
    if (keyword.length > 0 || politicalParty.length > 0) {
      const dataPaginated = parlamentarians.slice(15 * page, 15 * (page + 1));
      setParlamentarians(dataPaginated);
      setPage((prev) => prev + 1);
      return;
    }
    const dataPaginated = dataFormattedServerSide.slice(
      15 * page,
      15 * (page + 1)
    );
    setParlamentarians(dataPaginated);
    setPage((prev) => prev + 1);
  }

  function handleFilterByPoliticalParty(value: string) {
    if (value.length > 0 && keyword.length === 0) {
      const filteredValue = dataFormattedServerSide.filter((item) => {
        return item.siglaPartido === value;
      });
      setParlamentarians(filteredValue);
      setPoliticalParty(value);
      setPage(1);
    } else if (value.length === 0 && keyword.length > 0) {
      const filteredValue = dataFormattedServerSide.filter((item) => {
        return item.nome
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setParlamentarians(filteredValue);
      setPoliticalParty("");
      setPage(1);
    } else if (value.length > 0 && keyword.length > 0) {
      const filteredValue = dataFormattedServerSide
        .filter((item) => {
          return item.siglaPartido === politicalParty;
        })
        .filter((item) => {
          return item.nome
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase());
        });
      setParlamentarians(filteredValue);
      setPoliticalParty(value);
      setPage(1);
    } else {
      const dataPaginated = dataFormattedServerSide.slice(0, 15);
      setParlamentarians(dataPaginated);
      setPoliticalParty("");
      setPage(1);
    }
  }

  useEffect(() => {
    const dataPaginated = dataFormattedServerSide.slice(0, 15);
    setParlamentarians(dataPaginated);
  }, []);

  useEffect(() => {
    if (politicalParty.length > 0 && keyword.length > 0) {
      const filteredValue = dataFormattedServerSide
        .filter((item) => {
          return item.siglaPartido === politicalParty;
        })
        .filter((item) => {
          return item.nome
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase());
        });
      setParlamentarians(filteredValue);
      setPage(1);
      return;
    } else if (politicalParty.length > 0) {
      const filteredValue = dataFormattedServerSide.filter((item) => {
        return item.siglaPartido === politicalParty;
      });
      setParlamentarians(filteredValue);
      setPage(1);
      return;
    }
    if (keyword.length > 0) {
      const filteredValue = dataFormattedServerSide.filter((item) => {
        return item.nome
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setPage(1);
      setParlamentarians(filteredValue.slice(0, 15));
    } else {
      const dataPaginated = dataFormattedServerSide.slice(0, 15);
      setParlamentarians(dataPaginated);
      setPage(1);
    }
  }, [debouncedSearchTerm]);

  const totalPages =
    keyword.length > 0 || politicalParty.length > 0
      ? Math.ceil(parlamentarians.length / 15)
      : Math.ceil(dataFormattedServerSide.length / 15);

  const listAllPoliticalParties = dataFormattedServerSide.reduce(
    (acc, item) => {
      if (!acc.includes(item.siglaPartido)) {
        acc.push(item.siglaPartido);
      }
      return acc;
    },
    []
  );

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
          <S.WrapperFilters>
            <InputSearch
              name="search"
              label="Pesquisar"
              placeholder="Digite o nome do senador"
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
          <Content data={parlamentarians} />
          <Pagination
            page={page}
            total={totalPages}
            nextPage={() => handleNextPage()}
            previousPage={() => handlePreviousPage()}
            buttonNextDisabled={page === totalPages}
          />
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
