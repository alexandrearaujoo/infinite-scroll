import { ReactNode } from "react";
import { PokemonProvider } from "./Pokemons";

interface AppProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProps) => {
  return <PokemonProvider>{children};</PokemonProvider>;
};

export default AppProvider;
