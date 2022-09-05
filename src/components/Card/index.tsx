import { IPokemonCardProps } from "../../interfaces";
import { Container } from "./styles";

const Card = ({ pokemon, number }: IPokemonCardProps) => {
  return (
    <Container>
      <img src="#" alt="Pokemon Pokeball" />
      <span>
        {number} - {pokemon.name.toUpperCase()}
      </span>
    </Container>
  );
};

export default Card;
