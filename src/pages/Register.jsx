import { useState } from "react";
import {
  registerWithCredentials,
  signUpGoogle,
  signUpFacebook,
} from "../controllers/auth";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [departmentOrCareer, setDepartmentOrCareer] = useState("");
  const [foodPreferences, setFoodPreferences] = useState([]);

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const newUser = await registerWithCredentials(
        firstName,
        lastName,
        "", // Username, puedes agregar un input para esto si es necesario
        email,
        password,
        phone,
        departmentOrCareer, // Carrera o Departamento
        occupation, // Ocupación
        [], // Purchases, puedes modificar esto si tienes datos para agregar aquí
        foodPreferences // Preferencias Alimentarias
      );
      setUser(newUser);
      console.log("User registered successfully:", newUser);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const user = await signUpGoogle();
      setUser(user);
      console.log("User registered with Google successfully:", user);
      navigate("/");
    } catch (error) {
      console.error("Error registering user with Google:", error);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      const user = await signUpFacebook();
      setUser(user);
      console.log("User registered with Facebook successfully:", user);
      navigate("/");
    } catch (error) {
      console.error("Error registering user with Facebook:", error);
    }
  };

  const handleFoodPreferenceChange = (preference) => {
    setFoodPreferences((prevPreferences) =>
      prevPreferences.includes(preference)
        ? prevPreferences.filter((p) => p !== preference)
        : [...prevPreferences, preference]
    );
  };

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
              <form onSubmit={handleRegistration}>
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
                  <select
                    className="form-select"
                    onChange={(e) => setOccupation(e.target.value)}
                    required
                  >
                    <option value="">Selecciona tu ocupación</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="profesor">Profesor</option>
                    <option value="estudiante">Estudiante</option>
                  </select>
                </div>

                {/* Departamento o Carrera */}
                {occupation === "profesor" && (
                  <div className="mb-3">
                    <select
                      className="form-select"
                      onChange={(e) => setDepartmentOrCareer(e.target.value)}
                      required
                    >
                      <option value="">Selecciona tu departamento</option>
                      <option value="Depto. Matemáticas">
                        Depto. Matemáticas
                      </option>
                      <option value="Depto. Química">Depto. Química</option>
                      <option value="Depto. Física">Depto. Física</option>
                    </select>
                  </div>
                )}
                {occupation === "estudiante" && (
                  <div className="mb-3">
                    <select
                      className="form-select"
                      onChange={(e) => setDepartmentOrCareer(e.target.value)}
                      required
                    >
                      <option value="">Selecciona tu carrera</option>
                      <option value="Ing. Sistemas">Ing. Sistemas</option>
                      <option value="Administración">Administración</option>
                      <option value="Ing. Mecánica">Ing. Mecánica</option>
                    </select>
                  </div>
                )}

                {/* Preferencias alimentarias */}
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
                        onChange={() => handleFoodPreferenceChange("Veganismo")}
                      />
                      <label className="form-check-label">Veganismo</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="vegetarianCheck"
                        onChange={() =>
                          handleFoodPreferenceChange("Vegetarianismo")
                        }
                      />
                      <label className="form-check-label">Vegetarianismo</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="glutenFreeCheck"
                        onChange={() =>
                          handleFoodPreferenceChange("Libre de Gluten")
                        }
                      />
                      <label className="form-check-label">
                        Libre de Gluten
                      </label>
                    </div>
                  </div>
                </div>

                {/* Botón */}
                <div className="row">
                  <button className="boton" type="submit" value="Submit">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/*Registro rápido*/}
          <div className="col-md-4">
            <div className="card card-body shadow-lg" id="input">
              <div className="row">
                <div className="mb-3">
                  <h4>Registro Rápido</h4>
                </div>
              </div>
              <div className="mb-3">
                <div className="row" id="b2">
                  <button className="boton" onClick={handleGoogleSignUp}>
                    Google
                  </button>
                </div>

                <div className="row" id="b1">
                  <button className="boton" onClick={handleFacebookSignUp}>
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
