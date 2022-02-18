import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  BackgroundTest,
  CardContainer,
  PriceBadge,
  RarityBadge,
} from "./PokemonCard.styles";

interface PokemonCardProps {
  id: string;
  avg: number;
  rarity: string;
  image: string;
  flavorText: string;
}

export const PokemonCard = ({
  id,
  flavorText,
  image,
  avg,
  rarity,
}: PokemonCardProps) => {
  return (
    <Link href={`/card/${encodeURIComponent(id)}`}>
      <Tilt
        style={{
          borderRadius: 14,
        }}
        glareEnable={rarity.includes("Holo")}
        glarePosition="all"
      >
        <CardContainer
          onClick={() => location.assign(`/card/${encodeURIComponent(id)}`)}
        >
          <BackgroundTest
            className="cardCover"
            card={image}
            holo={rarity.includes("Holo")}
          />

          <RarityBadge
            legend={rarity.includes("LEGEND")}
            rare={rarity.includes("Rare")}
            amazing={rarity.includes("Amazing")}
          >
            {rarity}
          </RarityBadge>

          <PriceBadge>{avg}</PriceBadge>
        </CardContainer>
      </Tilt>
    </Link>
  );
};
