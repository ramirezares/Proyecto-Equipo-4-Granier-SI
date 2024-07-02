import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { WebRouter } from "./WebRouter.jsx";
import { RouterProvider } from "react-router-dom";
import { MenuProvider } from "./hooks/MenuContext.jsx";
import { CartProvider } from "./hooks/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
  <MenuProvider>
    <RouterProvider router={WebRouter} />
  </MenuProvider>
  </CartProvider>
  
);
/*
 */
