import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import { HeaderLayout } from "../components/Header/Header";
import { LatestCards } from "../components/LatestCards/LatestCards";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <HeaderLayout />

        <LatestCards />
      </Container>
    </>
  );
};

export default Home;
