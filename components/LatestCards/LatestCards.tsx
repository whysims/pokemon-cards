import { Col, Row, Layout } from "antd";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Card } from "pokemon-tcg-sdk-typescript/dist/sdk";

export const LatestCards = () => {
  const [pokemonList, setPokemonList] = useState<Card[]>();
  const [loading, setLoading] = useState(true);
  const { Content } = Layout;
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
    <Content>
      <h1>Latests Cards</h1>
      {loading && <Loading />}
      <Row gutter={[16, 26]}>
        {pokemonList &&
          shuffle(pokemonList).map((x: any) => (
            <Col sm={12} md={8} lg={6} key={x.id}>
              <PokemonCard
                id={x.id}
                flavorText={x.flavorText}
                images={x.images}
                avg={x.cardmarket.prices.trendPrice}
                rarity={x.rarity}
              />
            </Col>
          ))}
      </Row>
    </Content>
  );
};
