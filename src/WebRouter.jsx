//import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Greetings from "./pages/Greetings.jsx"
import LayoutPublic from "./layout/LayoutPublic.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx"
import LandingPage from "./pages/LandingPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import CompleteRegister from "./pages/CompleteRegister.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileSetting from "./pages/ProfileSetting.jsx";
import Granier from "./pages/Granier.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx"
import Menu from "./pages/Menu.jsx"
import ProductPage from "./pages/ProductPage.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx"
import HomeEmployee from "./pages/HomeEmployee.jsx";
import InProgress from "./pages/InProgress.jsx";
import NotFound from "./pages/NotFound.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ProductEmployee from "./pages/ProductEmployee.jsx";
import Orders from "./pages/Orders.jsx";
import ProductSetting from "./pages/ProductSetting.jsx";
import Reviews from "./pages/Reviews.jsx";
import Sugestions from "./pages/Sugestions.jsx";


//import { AuthProvider } from "./AuthContext.jsx";

export const WebRouter = createBrowserRouter([
  {
    /*Layout Public */
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      
      /* Offline */
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
        path: "/complete-register",
        element: <CompleteRegister />,
      },

      {
        /*In progress*/
        path: "/inprogress",
        element: <InProgress />,
      },

      /* User */
      {
        /*Perfil      FALTA*/
        path: "/profile",
        element: <Profile />,
      },
      {
        /*Configurar perfil      FALTA*/
        path: "/profile/Setting",
        element: <ProfileSetting />,
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
        /*Menu*/
        path: "/granier/menu",
        element: <Menu />,
      },
      {
        /*Producto*/
        path: "/granier/menu/product/:productName",
        element: <ProductPage />,
      },
      {
        /*Carrito*/   
        path: "/granier/shoppingCart",
        element: <ShoppingCart />,
      },
      {
        /*Detalles compra*/
        path: "/granier/shoppingCart/details",
        element: <CheckoutPage />,
      },
      {
        /*Agradecimiento*/
        path: "/granier/shoppingcart/successful",
        element: <Greetings />,
      },
      {
        /*Sugerencias*/  
        path: "/granier/sugestions",
        element: <Sugestions />,
      },

      /*Empleado */
      {
        /*HomeEmployee*/
        path: "/granier/homeEmployee",
        element: <HomeEmployee />,
      },
      {
        /*Añadir producto*/
        path: "/granier/employee/add-product",
        element: <AddProduct />,
      },
      {
        /*Menu*/
        path: "/granier/employee/menu",
        element: <Menu />,
      },
      {
        /*Empleado Producto*/ //TODO HACER y ruta
        path: "/granier/employee/menu/product/:productName",
        element: <ProductEmployee />,
      },
      {
        /*Configuracion del producto*/
        path: "/granier/employee/menu/product/:productName/setting",
        element: <ProductSetting />,
      },
      {
        /*Ordenes*/
        path: "/granier/employee/orders",
        element: <Orders />,
      },
      {
        /*Reseñas*/
        path: "/granier/employee/reviews",
        element: <Reviews/>
      },
    ],
  },
]);
