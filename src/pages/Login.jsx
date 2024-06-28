//Importacion React
import { useState } from "react";
//Importacion Componentes

//Importacion de Google

///////////////////////////////////////////////////////////////

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(password, email);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/MetroEats.png"
              className="unimetLogo"
              alt="Logo Unimet"
            />
          </div>
          <div className="mx-auto col-md-4">
            <div className="card card-body shadow-lg" id="input">
              <h4>Iniciar Sesión en UNIMET MetroEats</h4>
              {/*Inicio de SesionCoeeo */}
              <form onSubmit={null}>
                
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
                      type="password"
                      className="form-control"
                      id="password"
                      aria-label="Contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    
                  </div>
                  {/*Boton*/}
                  <div className="row">
                    <button
                      className="boton"
                      type="submit"
                      value="Submit"
                    >
                      Inicio de Sesión
                    </button>
                  </div>
              </form>

              {/*Inicio de Sesion Rapido */}
              <div className="mb-3">
                <h3>Inicio Rapido de Sesión</h3>
              </div>

              {/*BOTON GOOGLE*/}
              <div className="mb-3" id="googleBotton">
                <div className="mb-3">
                  <div className="row" id="b2">
                    <button
                      className="boton"
                      onClick={null}
                    >
                      Google
                    </button>
                  </div>
                </div>
              </div>
              {/*BOTON FACEBOOK*/}
              <div className="mb-3">
                <button>Facebook</button>
              </div>

              <div>
                
              </div>
              {/**Boton de redireccion a register */}
              <div className="registerText">¿No tienes cuenta?</div>
              <button
                type="submit"
                className="btn btn-primary"
                
              >
                Crear nueva Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
