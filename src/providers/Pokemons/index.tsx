import { createContext, ReactNode, useContext } from "react";
import { IPokemonsResponse } from "../../interfaces";
import { api } from "../../services/api";

interface Props {
  children: ReactNode;
}

interface PokemonContextData {
  fetchPokemons: (page: number) => Promise<IPokemonsResponse>;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData
);

export const PokemonProvider = ({ children }: Props) => {
  const fetchPokemons = async (
    page: number,
    limit = 100
  ): Promise<IPokemonsResponse> => {
    const { data } = await api.get<IPokemonsResponse>("/pokemon", {
      params: {
        limit,
        offset: page * 100,
      },
    });

    return data;
  };

  return (
    <PokemonContext.Provider value={{ fetchPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
