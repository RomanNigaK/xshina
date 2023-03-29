import { createContext } from "react";

export const PickPoints = createContext({
  current: 0,
  chengeAdress: (index: number) => {},
  coordinates: [0, 0],
  loadMap: (container: string) => {},
  lenght: 0,
});
