import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Card } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { Grid } from "@mui/material";

export const LatestCards = () => {
  const [pokemonList, setPokemonList] = useState<Card[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    PokemonTCG.findCardsByQueries({
      page: 1,
      pageSize: 50,
      orderBy: "-set.releaseDate",
    }).then((cards) => {
      setPokemonList(cards);
      setLoading((currentValue) => !currentValue);
    });
  }, []);

  return (
    <Grid>
      <h1>Latests Cards</h1>
      {loading && <Loading />}
      <Grid container spacing={3}>
        {pokemonList &&
          shuffle(pokemonList).map((x: any) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={x.id}>
              <PokemonCard
                id={x.id}
                flavorText={x.flavorText}
                image={x.images.small}
                avg={x.cardmarket.prices.trendPrice}
                rarity={x.rarity}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
