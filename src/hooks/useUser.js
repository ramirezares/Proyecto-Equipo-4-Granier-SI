import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getUserData } from "../controllers/auth"; // Asegúrate de ajustar la ruta si es necesario

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const data = await getUserData(user.email);
        setUserData(data);
      }
    };

    fetchUserData();
  }, [user]);

  return { user: userData, setUser, userData, setUserData };
}
