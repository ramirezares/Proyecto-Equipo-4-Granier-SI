import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser"; // Ajusta la ruta según la estructura de tu proyecto
import "../components/ChangingNavBar.style.css";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

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
   //Estas constantes son para que agarre click cuando la pantalla sea de celular
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   //Colocar clases css o bootstrap a cada uno y a las imagenes
   //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
   const content = <>
   <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blanco-hueso transition">
     <ul className="text-center text-xl p-20">
       <Link spy={true} smooth={true}    to="/register">
         <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Regístrate</li>
       </Link>
       <Link spy={true} smooth={true} to="/login">
         <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Inicia Sesión</li>
       </Link>
     </ul>

   </div>
   </>
   //NavBar para computadoras
   return (
     <nav className="bg-blanco-hueso">
       <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
         <div className="flex items-center flex-1">
            <Link  to="/">
             <img className="w-24 " src="/MetroEats.png" alt="" />
           </Link>
         </div>
         <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
           <div className="flex-10">
             <ul className="flex gap-8  ">
               <li className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                 <Link  spy={true} smooth={true} to="/register">
                 <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded">Regístrate</button>
                 </Link>
               </li>
               <li className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                 <Link spy={true} smooth={true} to="/login">
                   <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded" >Iniciar sesión</button>
                 </Link>
               </li>
             </ul>
           </div>
         </div>
         <div>
           {click && content}
         </div>
         <button className="block sm:hidden transition" onClick={handleClick}>
           {click ? <FaTimes style={{ color: "orange"  }}/> : <CiMenuFries style={{ color: "orange" }}/>}
         </button>
       </div>
     </nav>
   );

  } else if (role === "employee") {
    //Estas constantes son para que agarre click cuando la pantalla sea de celular
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
    //Aqui se colocan los links de las paginas
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-azul-oscuro-granier">
      <ul className="text-center text-xl p-20">
        
        <Link spy={true} smooth={true}    to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Menú</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Pedidos</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Cerrar Sesión</li>
        </Link>
      </ul>

    </div>
    </>
    //NavBar para computadoras
    return (
      //Fondo del navbar
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
             <Link  to="/">
              <img className="w-24 " src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link  to="/granier">
              <img className="w-40 " src="/Granieradministradorlogo.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  ">

              <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Menú
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Pedidos
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Cerrar sesión
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes style={{ color: "white"  }}/> : <CiMenuFries style={{ color: "white" }}/>}
          </button>
        </div>
      </nav>
    );
  } else if (role === "user" && window.location.pathname.includes("granier")) {
    //Estas constantes son para que agarre click cuando la pantalla sea de celular
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
    //Aqui se colocan los links de las paginas
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-azul-oscuro-granier">
      <ul className="text-center text-xl p-20">
        
        <Link spy={true} smooth={true}    to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Menú</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Conócenos</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Carrito</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Perfil</li>
        </Link>
      </ul>

    </div>
    </>
    //NavBar para computadoras
    return (
      //Fondo del navbar
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
             <Link  to="/">
              <img className="w-24 " src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link  to="/granier">
              <img className="w-40 " src="/Graniersoloblanco.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  ">

              <Link  spy={true} smooth={true} to="/inprogress">
                <li className=" mt-2 hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Menú
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className=" mt-2 hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Conócenos
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li >
                  <img className="w-10 mt-2 " src="/Carrito.png" alt="" />
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li >
                  <img className="w-12 " src="/Logoperfilusuarioengranier.png" alt="" />
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes style={{ color: "white"  }}/> : <CiMenuFries style={{ color: "white" }}/>}
          </button>
        </div>
      </nav>
        
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


/* Navbar offline
//Estas constantes son para que agarre click cuando la pantalla sea de celular
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blanco-hueso transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true}    to="/register">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Regístrate</li>
        </Link>
        <Link spy={true} smooth={true} to="/login">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Inicia Sesión</li>
        </Link>
      </ul>

    </div>
    </>
    //NavBar para computadoras
    return (
      <nav className="bg-blanco-hueso">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
             <Link  to="/">
              <img className="w-24 " src="/MetroEats.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  ">
                <li className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  <Link  spy={true} smooth={true} to="/register">
                  <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded">Regístrate</button>
                  </Link>
                </li>
                <li className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  <Link spy={true} smooth={true} to="/login">
                    <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded" >Iniciar sesión</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes style={{ color: "orange"  }}/> : <CiMenuFries style={{ color: "orange" }}/>}
          </button>
        </div>
      </nav>
    );

*/



/*Navbar de empleado
//Estas constantes son para que agarre click cuando la pantalla sea de celular
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
    //Aqui se colocan los links de las paginas
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-azul-oscuro-granier">
      <ul className="text-center text-xl p-20">
        
        <Link spy={true} smooth={true}    to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Menú</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Pedidos</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Cerrar Sesión</li>
        </Link>
      </ul>

    </div>
    </>
    //NavBar para computadoras
    return (
      //Fondo del navbar
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
             <Link  to="/">
              <img className="w-24 " src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link  to="/granier">
              <img className="w-40 " src="/Granieradministradorlogo.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  ">

              <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Menú
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Pedidos
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Cerrar sesión
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes style={{ color: "white"  }}/> : <CiMenuFries style={{ color: "white" }}/>}
          </button>
        </div>
      </nav>

*/

/* Navbar usuario
//Estas constantes son para que agarre click cuando la pantalla sea de celular
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //Colocar clases css o bootstrap a cada uno y a las imagenes
    //Este es el menu que sale cuadno presionas el boton superior derecho en celulares
    //Aqui se colocan los links de las paginas
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-azul-oscuro-granier">
      <ul className="text-center text-xl p-20">
        
        <Link spy={true} smooth={true}    to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Menú</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Conócenos</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Carrito</li>
        </Link>
        <Link spy={true} smooth={true} to="/inprogress">
          <li className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded">Perfil</li>
        </Link>
      </ul>

    </div>
    </>
    //NavBar para computadoras
    return (
      //Fondo del navbar
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
             <Link  to="/">
              <img className="w-24 " src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link  to="/granier">
              <img className="w-40 " src="/Graniersoloblanco.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8  ">

              <Link  spy={true} smooth={true} to="/inprogress">
                <li className=" mt-2 hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Menú
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li className=" mt-2 hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                  Conócenos
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li >
                  <img className="w-10 mt-2 " src="/Carrito.png" alt="" />
                </li>
                </Link>
                <Link  spy={true} smooth={true} to="/inprogress">
                <li >
                  <img className="w-12 " src="/Logoperfilusuarioengranier.png" alt="" />
                </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes style={{ color: "white"  }}/> : <CiMenuFries style={{ color: "white" }}/>}
          </button>
        </div>
      </nav>
        
    );
*/