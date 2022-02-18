import { Container } from "@mui/material";
import { NextPage } from "next";
import { HeaderLayout } from "../components/Header/Header";

const About: NextPage = () => {
  return (
    <Container>
      <HeaderLayout />

      <h1>About</h1>
      <p>
        This is just a project with the intention of personal training and
        development.
      </p>
      <p>The Tech Stack behind this project is:</p>
      <ul>
        <li>TypeScript</li>
        <li>Next.JS</li>
        <li>MUI</li>
        <li>Lottie Animations</li>
      </ul>

      <p>
        The APIs used as data sources are{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>{" "}
        and{" "}
        <a href="https://pokemontcg.io/" target="_blank" rel="noreferrer">
          Pokemon TCG API
        </a>
      </p>
      <p>Pokémon, Pokémon TCG, Pokémon names are trademarks of Nintendo.</p>
      <p>
        This website is not produced, endorsed, supported, or affiliated with
        Nintendo or The Pokémon Company.
      </p>
    </Container>
  );
};

export default About;
