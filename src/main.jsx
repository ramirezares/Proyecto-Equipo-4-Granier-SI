import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { WebRouter } from "./router/WebRouter.jsx";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./hooks/UserContext"; // Ajusta la ruta si es necesario

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={WebRouter} />
    </UserProvider>
  </React.StrictMode>
);
