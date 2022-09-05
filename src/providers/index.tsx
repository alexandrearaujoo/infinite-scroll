import { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProps) => {
  return { children };
};

export default AppProvider;
