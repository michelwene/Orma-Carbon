import Head from "next/head";
import { Home } from "@components/Home";

export default function AppHome() {
  return (
    <>
      <Head>
        <title>Deputados</title>
      </Head>

      <Home />
    </>
  );
}
