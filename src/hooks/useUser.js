import { useContext } from "react";
import { UserContext } from "./UserContext"; // Asegúrate de ajustar la ruta según sea necesario

export function useUser() {
  return useContext(UserContext);
}
