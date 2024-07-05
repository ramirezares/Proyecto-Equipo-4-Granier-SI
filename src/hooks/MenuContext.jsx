import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../controllers/product";
import { getAllPromotions } from "../controllers/promotion"; // Importa el controlador de promociones

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const products = await getAllProducts();
      const promotions = await getAllPromotions(); // Obtén las promociones
      setMenu([...products, ...promotions]); // Combina los productos y las promociones
    };

    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};
