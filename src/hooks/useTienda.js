import { useContext } from "react";
import { TiendaContext } from "../context/TiendaProvider";

export const useTienda = () => {
  return useContext(TiendaContext)
}