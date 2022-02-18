import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import { HeaderLayout } from "../components/Header/Header";
import { LatestCards } from "../components/LatestCards/LatestCards";

const Home: NextPage = () => {
  return (
    <Container>
      <HeaderLayout />

      <LatestCards />
    </Container>
  );
};

export default Home;
