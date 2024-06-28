
import { useState } from "react";


//////////////////////////////////////////////////////////////

const Register = () => {
  //const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");


  console.log(email,password,firstName,lastName,phone)

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
        </div>
        <div className="row">
          {/*Registro Correo */}
          <div className="col-md-5">
            <div className="card card-body shadow-lg" id="input">
              <h4>Regístrate en UNIMET MetroEats</h4>
              <form onSubmit={null}> {/**handleRegistration */}
                
                  {/*Datos Basicos*/}
                  <div className="mb-3">
                    <input
                      placeholder="Nombre"
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Apellido"
                      type="text"
                      className="form-control"
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
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
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        +58
                      </span>
                      <input
                        placeholder="Teléfono"
                        type="tel"
                        className="form-control"
                        id="phone"
                        aria-label="Teléfono"
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        required
                      />
                    </div>
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

                  {/*Ocupacion*/}
                  <div className="mb-3">
                    {/*<OcupationArea
                      onOcupationChange={(value) =>
                        handleOcupationChange(value)
                      }
                      onDepartmentChange={(value) =>
                        handleDepartmentChange(value)
                      }
                    />*/}
                  </div>

                  {/*preferencias alimentarias*/}
                  <div className="mb-3">
                    <div className="p">
                      <p>Preferencias alimentarias</p>
                    </div>

                    <div className="input-group mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="veganCheck"
                        />
                        <label className="form-check-label">Veganismo</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="vegetarianCheck"
                        />
                        <label className="form-check-label">
                          Vegetarianismo
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="glutenFreeCheck"
                        />
                        <label className="form-check-label">
                          Libre de Gluten
                        </label>
                      </div>
                    </div>
                  </div>

                  {/*Boton*/}
                  <div className="row">
                    <button
                      className="boton"
                      type="submit"
                      value="Submit"
                    >
                      Registrarse
                    </button>
                  </div>
              </form>
            </div>
          </div>

          {/*Registro rapido*/}
          <div className="col-md-4">
            <div className="card card-body shadow-lg" id="input">
              <div className="row">
                <div className="mb-3">
                  <h4>Registro Rapido</h4>
                </div>
              </div>
              <div className="mb-3">
                <div className="row" id="b2">
                  <button
                    className="boton"
                    onClick={null}
                  >
                    Google
                  </button>
                </div>

                <div className="row" id="b1">
                  <button
                    className="boton"
                    onClick={null} /*Aqui va handle*/
                  >
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
