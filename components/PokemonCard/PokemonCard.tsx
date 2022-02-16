import { Card } from "antd";
import Link from "next/link";
import { CardContainer, RarityBadge } from "./PokemonCard.styles";

interface PokemonCardProps {
  id: string;
  avg: number;
  rarity: string;
  images: {
    large: string;
    small: string;
  };
  flavorText: string;
}

export const PokemonCard = ({
  id,
  flavorText,
  images,
  avg,
  rarity,
}: PokemonCardProps) => {
  return (
    <CardContainer holo={rarity.includes("Holo")}>
      <Link href={`/card/${encodeURIComponent(id)}`}>
        <Card
          style={{ width: 300 }}
          bordered={false}
          cover={<img alt="example" src={images.small} />}
        />
      </Link>
      <RarityBadge
        legend={rarity.includes("LEGEND")}
        rare={rarity.includes("Rare")}
        amazing={rarity.includes("Amazing")}
      >
        {rarity}
      </RarityBadge>
      <div className="pokemon-content">
        <p>{flavorText}</p>
        <p>Avg Price: {avg} </p>
      </div>
    </CardContainer>
  );
};
