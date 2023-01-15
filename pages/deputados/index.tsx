import Head from "next/head";
import { apiCongress } from "@services/api";
import { AppHomeProps } from "./types";
import { Content } from "./Content";
import { Parliamentarian } from "../../types/Parlamentarian";

export default function AppHome({ data }: AppHomeProps) {
  const dataFormatted = data.dados.map((item) => ({
    ...item,
    parlamentarianType: "Deputado",
  }));
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Content data={dataFormatted} />
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
