import Head from "next/head";
import { Home } from "@components/Home";
import { api } from "@services/api";
import { AppHomeProps, IDeputados } from "./types";

export default function AppHome({ data }: AppHomeProps) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Home data={[]} />
    </>
  );
}

// export async function getServerSideProps() {
//   const {
//     data,
//   }: {
//     data: IDeputados[];
//   } = await api.get("/deputados", {
//     params: {
//       itens: 15,
//     },
//   });
//   // Pass data to the page via props
//   return { props: { data } };
// }
