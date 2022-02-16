import { Col, Row, Layout } from "antd";
import pokemon from "pokemontcgsdk";
import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const LatestCards = () => {
  const [pokemonList, setPokemonList] = useState<[]>();
  const [loading, setLoading] = useState(true);
  const { Content } = Layout;
  useEffect(() => {
    pokemon.card
      .where({ pageSize: 100, page: 1, orderBy: "-set.releaseDate" })
      .then((result: { data: [] }) => {
        setPokemonList(result.data);
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
