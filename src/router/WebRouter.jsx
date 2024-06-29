//import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic.jsx";

import AboutUs from "../pages/AboutUs.jsx"
import LandingPage from "../pages/LandingPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Granier from "../pages/Granier.jsx";
import Contact from "../pages/Contact.jsx";
import HomeEmployee from "../pages/HomeEmployee.jsx";
import InProgress from "../pages/InProgress.jsx";
import NotFound from "../pages/NotFound.jsx";

//import { AuthProvider } from "./AuthContext.jsx";

export const WebRouter = createBrowserRouter([
  {
    /*Layout Public */
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        /*Landing page */
        index: true,
        element: <LandingPage />,
      },
      {
        /*Registro*/
        path: "/register",
        element: <Register />,
      },
      {
        /*Inicio de sesion*/
        path: "/login",
        element: <Login />,
      },
      {
        /*Completar registro*/
        path: "/register/complete",
        element: <InProgress />,
      },
      {
        /*Granier*/
        path: "/granier",
        element: <Granier />,
      },
      {
        /*Contacto*/
        path: "/granier/contact",
        element: <Contact />,
      },
      {
        /*About Us*/
        path: "/granier/aboutUs",
        element: <AboutUs />,
      },
      {
        /*HomeEmployee*/
        path: "/granier/homeEmployee",
        element: <HomeEmployee />,
      },
      {
        /*In progress*/
        path: "/inprogress",
        element: <InProgress />,
      },
      {
        /*Otra pagina*/
        path: "/inprogress",
        element: <InProgress />,
      },
    ],
  },
]);
