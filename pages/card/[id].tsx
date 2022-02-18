import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { PokemonClient, Pokemon } from "pokenode-ts";
import { Card } from "pokemon-tcg-sdk-typescript/dist/sdk";
import React, { useEffect, useState } from "react";
import { HeaderLayout } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { PokemonType } from "../../components/PokemonType/PokemonType";

const Content = styled.div`
  padding-top: 50px;
`;

export default function PokemonAboutPage() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Card>();
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();
  const api = new PokemonClient();
  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    if (id) {
      PokemonTCG.findCardByID(id as string).then((cards) => {
        setPokemon(cards);
        console.log(cards);
        setLoading((currentValue) => !currentValue);
        api.getPokemonByName(cards.name.toLocaleLowerCase()).then((poke) => {
          setPokemonDetails(poke);
        });
      });
    }
  }, [id]);

  return (
    <Container>
      <HeaderLayout />
      <Content>
        {loading && <Loading />}
        <Grid container>
          <Grid item>
            {pokemon && (
              <PokemonCard
                id={pokemon.id}
                avg={0}
                flavorText={pokemon.flavorText || ""}
                image={pokemon.images.large}
                rarity={pokemon.rarity}
              />
            )}
          </Grid>
          <Grid item>
            <PokemonType />
            {pokemonDetails && pokemonDetails.name}
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
}
