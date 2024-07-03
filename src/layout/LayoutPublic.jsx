import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

const LayoutPublic = () => {
  const navigation = useNavigation();

  //Validar que no haya usuario activo con firebase
  if (
    window.location.pathname.includes("login") ||
    window.location.pathname.includes("register")
  ) {
    /* TODO
    Colocar con un PopUp sin boton
    {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
    */
    return (
      <>
        <main className="contanier">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
};

export default LayoutPublic;
