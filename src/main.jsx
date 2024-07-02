import React from "react";
import ReactDOM from "react-dom/client";

import { WebRouter } from "./WebRouter.jsx";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./hooks/UserContext.jsx"; // Asegúrate de ajustar la ruta si es necesario
import { MenuProvider } from "./hooks/MenuContext.jsx";
import { CartProvider } from "./hooks/CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <MenuProvider>
    <UserProvider>
    <RouterProvider router={WebRouter} />
  </UserProvider>
  </MenuProvider>
  </CartProvider>
  
);
