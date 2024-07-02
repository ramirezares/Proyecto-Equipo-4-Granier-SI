import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginWithCredentials,
  signInGoogle,
  signInFacebook,
} from "../controllers/auth";
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
    <div className="mx-auto mb-10">

      <div className="flex flex-wrap">
          {/*Imagen */}
          <div className=" w-full ">
            <img
              src="/MetroEats.png"
              className="mx-auto d-block mt-5 mb-10"
              alt="Logo Unimet"
              width="200"
            />
          </div>
      </div>

      <div className="flex justify-between mx-auto mb-10">

        <div className="LOGIN flex flex-wrap mx-auto w-1/2">
          <div className="max-w-xl container mx-auto" id="input">
            <div className="border-2 border-gray-200 items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg" id="input">
              <h4 className="text-2xl font-bold mb-4">Iniciar Sesión en UNIMET MetroEats</h4>

              <form onSubmit={handleLogin}>

                {/*Correo Electronico */}
                <div className="mb-3 mt-4">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="Contraseña"
                      id="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Correo Electrónico
                    </label>
                  </div>
                </div>

                {/*Contraseña */}
                <div className="mb-3 mt-4">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type={isVisible ? "text" : "password"} // Usar isVisible para determinar el tipo de entrada
                      name="Contraseña"
                      id="password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Contraseña
                    </label>
                  </div>
                </div>
                  
                {/**HAY QUE ARREGLAR ESTO */}
                <div className="mb-3">
    
                  <img
                    src={eye}
                    onClick={handlePasswordClick}
                    alt="Toggle visibility"
                  />
                </div>

                {/*Boton */}
                <div className="flex flex-wrap">
                    <button
                      className="mx-auto mt-6 w-full px-4 py-2 bg-[#003087] text-white font-bold rounded-md hover:bg-[#001D53] focus:outline-none focus:ring focus:ring-blue-300"
                      type="submit"
                      value="Submit"
                    >
                      Inicio de Sesión
                    </button>
                </div>
          
              </form>
              
              
              </div>
              
          </div>
        </div>

        

        <div className="max-w-lg w-1/2 container mx-auto">
            <div
              className="border-2 border-gray-200 items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg"
              id="input"
            >
              <h4 className="text-2xl font-bold mb-4">Inicio Rapido de Sesión</h4>
              <hr className="h-px bg-gray-300 border-0" />

              <div className="flex flex-wrap" id="googleBotton">
                  <button
                    className="mx-auto mt-6 w-full px-4 py-2 bg-[#003087] text-white font-bold rounded-full hover:bg-[#001D53] focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={handleGoogleLogin}
                  >
                    Google
                  </button>
              </div>

              <div className="mb-6 flex flex-wrap" id="facebookBotton">
                  <button
                    className="mx-auto mt-6 w-full px-4 py-2 bg-[#003087] text-white font-bold rounded-full hover:bg-[#001D53] focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={handleFacebookLogin}
                  >
                    Facebook
                  </button>
              </div>

              <div className="registerText flex justify-center">
                <p className="block text-lg font-medium text-gray-900 text-center">¿No tienes cuenta?</p>
                </div>
                <div className="flex justify-center">
                <button
                  type="button"
                  className="mx-auto mt-6 w-lg px-4 py-2 bg-[#00A3E0] text-white font-bold rounded-lg hover:bg-[#027EAD] focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={() => navigate("/register")}
                >
                  Crear nueva Cuenta
                </button></div>

            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
