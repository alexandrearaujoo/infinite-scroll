export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IPokemonCardProps {
  pokemon: IPokemon;
  number: number;
}

export interface IInfiniteScrollProps {
  callback: () => void;
}