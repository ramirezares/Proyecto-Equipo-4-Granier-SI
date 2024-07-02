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
                      className="mx-auto mt-6 w-full px-4 py-2 bg-[#003087] text-white font-bold rounded-lg hover:bg-[#32528D] focus:outline-none focus:ring focus:ring-blue-300"
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
              <hr className="h-px mb-6 bg-gray-300 border-0" />

              <div className="mb-3 flex flex-wrap justify-center" id="googleBotton">

              <button 
                type="button" 
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                onClick={handleGoogleLogin}>  
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" 
                  clipRule="evenodd"/>
                  </svg>
                  Inicia Sesión con Google
              </button>
        
              </div>

              <div className="mb-6 flex flex-wrap justify-center" id="facebookBotton">
                  <button 
                      type="button" 
                      className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                      onClick={handleFacebookLogin}>
                      <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                      </svg>
                      Inicia Sesión con Facebook
                  </button>
              </div>

              <div className="registerText flex justify-center">
                <p className="block text-lg font-medium text-gray-900 text-center">¿No tienes cuenta?</p>
              </div>

              <div className="flex justify-center">
              <button
                type="button"
                className="mx-auto mt-4 w-full px-4 py-2 bg-[#FF8200] text-white font-bold rounded-lg hover:bg-[#FFAA51] focus:outline-none focus:ring focus:ring-blue-300"
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
