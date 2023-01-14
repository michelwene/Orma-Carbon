import Head from "next/head";
import { apiCongress } from "@services/api";
import { AppHomeProps, IDeputados } from "./types";
import { Content } from "./Content";

export default function AppHome({ data }: AppHomeProps) {
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Content data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const {
    data,
  }: {
    data: IDeputados[];
  } = await apiCongress.get("/deputados", {
    params: {
      itens: 15,
    },
  });
  return { props: { data } };
}
