import Head from "next/head";
import { Home } from "@components/Home";
import { api } from "../service/api";

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
  data: IDeputados[];
}

export default function AppHome({ data }: AppHomeProps) {
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Home />
    </>
  );
}

// export async function getServerSideProps() {
//   const {
//     data: { dados },
//   }: {
//     data: {
//       dados: IDeputados[];
//     };
//   } = await api.get("/deputados");
//   // Pass data to the page via props
//   return { props: { dados } };
// }
