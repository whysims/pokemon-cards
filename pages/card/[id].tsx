import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { Card } from "pokemon-tcg-sdk-typescript/dist/sdk";
import React, { useEffect, useState } from "react";
import { HeaderLayout } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";

const Content = styled.div`
  padding-top: 50px;
`;

export default function PokemonAboutPage() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Card>();
  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    if (id) {
      PokemonTCG.findCardByID(id as string).then((cards) => {
        setPokemon(cards);
        console.log(cards);
        setLoading((currentValue) => !currentValue);
      });
    }
  }, [id]);

  return (
    <Container>
      <HeaderLayout />
      <Content>
        {loading && <Loading />}
        {pokemon && (
          <PokemonCard
            id={pokemon.id}
            avg={0}
            flavorText={pokemon.flavorText || ""}
            image={pokemon.images.large}
            rarity={pokemon.rarity}
          />
        )}
      </Content>
    </Container>
  );
}
