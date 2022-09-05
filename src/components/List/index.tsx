import { useEffect, useState } from "react";
import { IPokemon } from "../../interfaces";
import { usePokemon } from "../../providers/Pokemons";
import Card from "../Card";
import InfiniteScroll from "../InfiniteScroll";
import { Container } from "./styles";

const List = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(0);
  const { fetchPokemons } = usePokemon();

  useEffect(() => {
    fetchPokemons(page).then((data) => {
      setPokemons([...pokemons, ...data.results]);
    });
  }, [page]);

  return (
    <>
      <Container>
        {pokemons.map((pokemon, index) => (
          <Card key={pokemon.name} pokemon={pokemon} number={index + 1} />
        ))}
      </Container>
      <InfiniteScroll callback={() => setPage((oldPage) => oldPage + 1)} />
    </>
  );
};

export default List;
