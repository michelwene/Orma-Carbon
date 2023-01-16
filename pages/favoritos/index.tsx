import { Box } from "@components/Box";
import { Container } from "@components/Container";
import Head from "next/head";
import { useFavorite } from "../../context/FavoritesContext";
import { Content } from "../../components/Favorites/Content";
import { useState, useEffect } from "react";
import useDebounce from "@hooks/useDebounce";
import InputSearch from "@components/InputSearch";
import { Parliamentarian } from "../../types/Parlamentarian";
import { Pagination } from "@components/Pagination";
import { Select } from "@components/Select";
import * as S from "../../components/Favorites/styles";

export default function Favorites() {
  const { favorites } = useFavorite();
  const [keyword, setKeyword] = useState("");
  const [politicalParty, setPoliticalParty] = useState("");
  const debouncedSearchTerm = useDebounce(keyword, 500);
  const [parlamentarians, setParlamentarians] = useState<Parliamentarian[]>([]);
  const [page, setPage] = useState(1);

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
    const dataPaginated = favorites.slice(15 * (page - 2), 15 * (page - 1));
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
    const dataPaginated = favorites.slice(15 * page, 15 * (page + 1));
    setParlamentarians(dataPaginated);
    setPage((prev) => prev + 1);
  }

  function handleFilterByPoliticalParty(value: string) {
    if (value.length > 0 && keyword.length === 0) {
      const filteredValue = favorites.filter((item) => {
        return item.siglaPartido === value;
      });
      setParlamentarians(filteredValue);
      setPoliticalParty(value);
      setPage(1);
    } else if (value.length === 0 && keyword.length > 0) {
      const filteredValue = favorites.filter((item) => {
        return item.nome
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setParlamentarians(filteredValue);
      setPoliticalParty("");
      setPage(1);
    } else if (value.length > 0 && keyword.length > 0) {
      const filteredValue = favorites
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
      const dataPaginated = favorites.slice(0, 15);
      setParlamentarians(dataPaginated);
      setPoliticalParty("");
      setPage(1);
    }
  }

  useEffect(() => {
    const dataPaginated = favorites.slice(0, 15);
    setParlamentarians(dataPaginated);
  }, [favorites]);

  useEffect(() => {
    if (politicalParty.length > 0 && keyword.length > 0) {
      const filteredValue = favorites
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
      const filteredValue = favorites.filter((item) => {
        return item.siglaPartido === politicalParty;
      });
      setParlamentarians(filteredValue);
      setPage(1);
      return;
    }
    if (keyword.length > 0) {
      const filteredValue = favorites.filter((item) => {
        return item.nome
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setPage(1);
      setParlamentarians(filteredValue.slice(0, 15));
    } else {
      const dataPaginated = favorites.slice(0, 15);
      setParlamentarians(dataPaginated);
      setPage(1);
    }
  }, [debouncedSearchTerm]);

  const totalPages =
    keyword.length > 0 || politicalParty.length > 0
      ? Math.ceil(parlamentarians.length / 15)
      : Math.ceil(favorites.length / 15);

  const listAllPoliticalParties = favorites.reduce((acc, item) => {
    if (!acc.includes(item.siglaPartido)) {
      acc.push(item.siglaPartido);
    }
    return acc;
  }, [] as string[]);

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
          <S.WrapperFilters>
            <InputSearch
              name="search"
              label="Pesquisar"
              placeholder="Digite o nome do parlamentar"
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
          {parlamentarians.length > 0 && (
            <Pagination
              page={page}
              total={totalPages}
              nextPage={() => handleNextPage()}
              previousPage={() => handlePreviousPage()}
              buttonNextDisabled={page === totalPages}
            />
          )}
        </Box>
      </Container>
    </>
  );
}
