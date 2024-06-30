import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginWithCredentials,
  signInGoogle,
  signInFacebook,
} from "../controllers/Auth";
import { usePassword } from "../hooks/password";
import { useRequired } from "../hooks/requiered";
import { useUser } from "../hooks/useUser"; // Ajusta la ruta si es necesario

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Mantener el valor de la contraseña aquí
  const { isVisible, eye, handlePasswordClick } = usePassword();
  const navigate = useNavigate();
  const { handleButtonClick } = useRequired();
  const { setUser, setRole } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    handleButtonClick(true);
    const user = await loginWithCredentials(email, password);
    if (user) {
      setUser(user.email);
      setRole("user"); // o el rol que corresponda
      navigate("/"); // Redirige al Landing Page
    } else {
      // Manejar error de inicio de sesión
    }
  };

  const handleGoogleLogin = async () => {
    const user = await signInGoogle();
    if (user) {
      setUser(user.email);
      setRole("user");
      navigate("/"); // Redirige al Landing Page
    } else {
      // Manejar error de inicio de sesión con Google
    }
  };

  const handleFacebookLogin = async () => {
    const user = await signInFacebook();
    if (user) {
      setUser(user.email);
      setRole("user");
      navigate("/"); // Redirige al Landing Page
    } else {
      // Manejar error de inicio de sesión con Facebook
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="/MetroEats.png" className="unimetLogo" alt="Logo Unimet" />
        </div>
        <div className="mx-auto col-md-4">
          <div className="card card-body shadow-lg" id="input">
            <h4>Iniciar Sesión en UNIMET MetroEats</h4>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  placeholder="Correo Electrónico"
                  type="email"
                  className="form-control"
                  id="email"
                  aria-label="Correo Electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Contraseña"
                  type={isVisible ? "text" : "password"} // Usar isVisible para determinar el tipo de entrada
                  className="form-control"
                  id="password"
                  aria-label="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={eye}
                  onClick={handlePasswordClick}
                  alt="Toggle visibility"
                />
              </div>
              <div className="row">
                <button className="boton" type="submit" value="Submit">
                  Inicio de Sesión
                </button>
              </div>
            </form>
            <div className="mb-3">
              <h3>Inicio Rapido de Sesión</h3>
            </div>
            <div className="mb-3" id="googleBotton">
              <div className="mb-3">
                <div className="row" id="b2">
                  <button className="boton" onClick={handleGoogleLogin}>
                    Google
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button onClick={handleFacebookLogin}>Facebook</button>
            </div>
            <div className="registerText">¿No tienes cuenta?</div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Crear nueva Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
