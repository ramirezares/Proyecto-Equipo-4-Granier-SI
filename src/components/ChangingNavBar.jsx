import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/ChangingNavBar.style.css";

const ChangingNavBar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const handleLogin = () => {
    setUser("Nombre Usuario");
    setRole("user"); //Manejar el cambio de estado funcion isLoged de firebase y llamar a la funcion
  };

  const handleLogout = () => {
    setUser(null);
    setRole(null); //Manejar el cambio de estado
  };

  if (!user) {
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    return (
      <div className="offline">
        <Link to="/">
          <img src="/MetroEats.png" alt="" height="90" />
        </Link>
        <button onClick={handleLogin}>Regístrate</button>
        <button onClick={handleLogin}>Inicia Sesión</button>
      </div>
    );
  } else if (role === "employee") {
    return (
      <div className="granier">
        <Link to="/">
          <img src="/Unimetmetroeatsblanco.png" alt="" height="80" />
        </Link>
        <Link to="/granier">
          <img src="/Granieradministradorlogo.png" alt="" height="80" />
        </Link>
        <Link className="borderless" to="/inprogress">
          Menu
        </Link>
        <Link className="borderless" to="/inprogress">
          Pedidos
        </Link>
        <Link className="borderless" to="/">
          Cerrar sesion
        </Link>
      </div>
    );
  } else if (role === "user" && window.location.pathname.includes("granier")) {
    return (
      <div className="granier">
        <Link to="/">
          <img src="/Unimetmetroeatsblanco.png" alt="" height="80" />
        </Link>
        <Link to="/granier">
          <img src="/Graniersoloblanco.png" alt="" height="80" />
        </Link>
        <Link className="borderless" to="/inprogress">
          Menu
        </Link>
        <Link className="borderless" to="/inprogress">
          Conócenos
        </Link>
        <Link to="/inprogress">
          <img src="/Carrito.png" alt="" height="50" />
        </Link>
        <Link to="/inprogress">
          <img src="/Logoperfilusuarioengranier.png" alt="" height="50" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="loged">
        <Link to="/">
          <img src="/MetroEats.png" alt="" height="90" />
        </Link>
        <Link>
          <div
            className="btnProfile"
            onClick={() => {
              handleLogout();
            }}
          >
            <img src="/Logoperfilusuarioenlanding.png" alt="" height="50" />
            <p>{user}</p>
          </div>
        </Link>
      </div>
    );
  }
};

export default ChangingNavBar;
