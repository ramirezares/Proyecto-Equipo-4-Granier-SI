import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // Cargar productos desde la base de datos
  const initialProducts = [
    {
      name: "Cafe",
      description: "Caliente",
      price: 2.5,
      images: "*",
      foodPreference: "",
      kindProduct: "Bebida",
      kindFood: "Merienda",
      status: "Disponible",
    },
    {
      name: "Pan",
      description: "Fresco",
      price: 5.99,
      images: "*",
      foodPreference: "Vegano",
      kindProduct: "Platillo",
      kindFood: "Desayuno",
      status: "Disponible",
    },
    {
      name: "Cafe",
      description: "Caliente",
      price: 2.5,
      images: "*",
      foodPreference: "",
      kindProduct: "Bebida",
      kindFood: "Merienda",
      status: "Disponible",
    },
    {
      name: "Pan",
      description: "Fresco",
      price: 5.99,
      images: "*",
      foodPreference: "Vegano",
      kindProduct: "Platillo",
      kindFood: "Desayuno",
      status: "Disponible",
    },
    {
      name: "Cafe",
      description: "Caliente",
      price: 2.5,
      images: "*",
      foodPreference: "",
      kindProduct: "Bebida",
      kindFood: "Merienda",
      status: "Disponible",
    },
    {
      name: "Pan",
      description: "Fresco",
      price: 5.99,
      images: "*",
      foodPreference: "Vegano",
      kindProduct: "Platillo",
      kindFood: "Desayuno",
      status: "Disponible",
    },
  ];

  const [menu, setMenu] = useState(initialProducts);

  const addToMenu = (newProduct) => {
    setMenu([...menu, { ...newProduct, status: "Disponible" }]);
  };

  const editAvailability = (productName) => {
    setMenu(
      menu.map((product) =>
        product.name === productName
          ? {
              ...product,
              status:
                product.status === "Disponible"
                  ? "No Disponible"
                  : "Disponible",
            }
          : product
      )
    );
  };

  const removeFromMenu = (productName) => {
    setMenu(menu.filter((product) => product.name !== productName));
  };

  return (
    <MenuContext.Provider
      value={{ menu, addToMenu, editAvailability, removeFromMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};
