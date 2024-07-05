import { Outlet } from "react-router-dom";
import NavBar from "../components/ChangingNavBar";
import Footer from "../ui/Footer";

const LayoutPublic = () => {
  //Validar que no haya usuario activo con firebase
  if (
    window.location.pathname.includes("login") ||
    window.location.pathname.includes("register")
  ) {
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
