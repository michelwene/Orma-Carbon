import Head from "next/head";
import { Home } from "@components/Home";
import { api } from "@services/api";

interface IDeputados {
  email: string | null;
  id: number;
  idLegislatura: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;
}

interface AppHomeProps {
  data: {
    dados: IDeputados[];
  };
}

export default function AppHome({ data }: AppHomeProps) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Home />
    </>
  );
}

export async function getServerSideProps() {
  const {
    data,
  }: {
    data: IDeputados[];
  } = await api.get("/deputados", {
    params: {
      itens: 15,
    },
  });
  // Pass data to the page via props
  return { props: { data } };
}
