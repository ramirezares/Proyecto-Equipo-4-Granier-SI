import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser"; // Ajusta la ruta según la estructura de tu proyecto
import "../components/ChangingNavBar.style.css";

const ChangingNavBar = () => {
  const { user, setUser, role, setRole } = useUser(); // Utiliza el contexto del usuario
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    setUser(null);
    setRole(null);
    navigate("/");
  };

  if (!user) {
    // Usuario no logueado
    return (
      <div className="offline">
        <Link to="/">
          <img className="w-16" src="/MetroEats.png" alt="MetroEats logo" />
        </Link>
        <button onClick={handleRegister}>Regístrate</button>
        <button onClick={handleLogin}>Inicia Sesión</button>
      </div>
    );
  } else if (role === "employee") {
    // Usuario logueado con rol "employee"
    return (
      <div className="granier">
        <Link to="/">
          <img
            src="/Unimetmetroeatsblanco.png"
            alt="Unimet Metro Eats logo"
            height="80"
          />
        </Link>
        <Link to="/granier">
          <img
            src="/Granieradministradorlogo.png"
            alt="Granier Admin logo"
            height="80"
          />
        </Link>
        <Link className="borderless" to="/inprogress">
          Menu
        </Link>
        <Link className="borderless" to="/inprogress">
          Pedidos
        </Link>
        <button className="borderless" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    );
  } else if (role === "user" && window.location.pathname.includes("granier")) {
    // Usuario logueado con rol "user"
    return (
      <div className="granier">
        <Link to="/">
          <img
            src="/Unimetmetroeatsblanco.png"
            alt="Unimet Metro Eats logo"
            height="80"
          />
        </Link>
        <Link to="/granier">
          <img src="/Graniersoloblanco.png" alt="Granier logo" height="80" />
        </Link>
        <Link className="borderless" to="/inprogress">
          Menu
        </Link>
        <Link className="borderless" to="/inprogress">
          Conócenos
        </Link>
        <Link to="/inprogress">
          <img src="/Carrito.png" alt="Carrito" height="50" />
        </Link>
        <Link to="/inprogress">
          <img
            src="/Logoperfilusuarioengranier.png"
            alt="Perfil usuario"
            height="50"
          />
        </Link>
      </div>
    );
  } else {
    // Usuario logueado con rol diferente
    return (
      <div className="loged">
        <Link to="/">
          <img src="/MetroEats.png" alt="MetroEats logo" height="90" />
        </Link>
        <div className="btnProfile" onClick={handleLogout}>
          <img
            src="/Logoperfilusuarioenlanding.png"
            alt="Perfil usuario"
            height="50"
          />
          <p>{user}</p>
        </div>
      </div>
    );
  }
};

export default ChangingNavBar;
