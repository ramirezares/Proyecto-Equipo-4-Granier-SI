import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../controllers/product";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const products = await getAllProducts();
      setMenu(products);
    };

    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};
