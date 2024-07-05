import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useUser } from "../hooks/useUser";
import { logOut } from "../controllers/auth";
import "../components/ChangingNavBar.style.css";

const ChangingNavBar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = async () => {
    await logOut();
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  const renderContent = (links) => (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blanco-hueso transition">
      <ul className="text-center text-xl p-20">
        {links.map(({ to, text, onClick }) => (
          <li
            key={to}
            className="my-4 py-4 border-b border-naranja-unimet hover:bg-naranja-unimet hover-rounded"
          >
            {onClick ? (
              <button onClick={onClick}>{text}</button>
            ) : (
              <Link to={to}>{text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const commonLinks = [
    { to: "/register", text: "Regístrate" },
    { to: "/login", text: "Inicia Sesión" },
  ];

  if (!user) {
    return (
      <nav className="bg-blanco-hueso">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <Link to="/">
              <img className="w-24" src="/MetroEats.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8">
                {commonLinks.map(({ to, text }) => (
                  <li
                    key={to}
                    className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer"
                  >
                    <Link to={to}>
                      <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded">
                        {text}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>{click && renderContent(commonLinks)}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "orange" }} />
            ) : (
              <CiMenuFries style={{ color: "orange" }} />
            )}
          </button>
        </div>
      </nav>
    );
  } else if (user.userRole === "2") {
    const employeeLinks = [
      { to: "/granier/employee/menu", text: "Menú" },
      { to: "/granier/employee/orders", text: "Pedidos" },
      { to: "/login", text: "Cerrar Sesión", onClick: handleLogout },
    ];

    return (
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <Link to="/">
              <img className="w-24" src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link to="/granier/homeEmployee">
              <img
                className="w-40"
                src="/Granieradministradorlogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8">
                {employeeLinks.map(({ to, text, onClick }) => (
                  <li
                    key={to}
                    className="hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer"
                  >
                    {onClick ? (
                      <button onClick={onClick}>{text}</button>
                    ) : (
                      <Link to={to}>{text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>{click && renderContent(employeeLinks)}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "white" }} />
            ) : (
              <CiMenuFries style={{ color: "white" }} />
            )}
          </button>
        </div>
      </nav>
    );
  } else if (
    user.userRole === "1" &&
    window.location.pathname.includes("granier")
  ) {
    const granierLinks = [
      { to: "/granier/menu", text: "Menú" },
      { to: "/granier/aboutUs", text: "Conócenos" },
      { to: "/granier/shoppingCart", text: "Carrito" },
      { to: "/profile", text: "Perfil" },
    ];

    return (
      <nav className="bg-azul-oscuro-granier">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <Link to="/">
              <img className="w-24" src="/Unimetmetroeatsblanco.png" alt="" />
            </Link>
            <Link to="/granier">
              <img className="w-40" src="/Graniersoloblanco.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8">
                {granierLinks.map(({ to, text }) => (
                  <Link key={to} to={to}>
                    <li className=" mt-2 hover:text-naranja-unimet transition border-b-2 hover:border-naranja-unimet cursor-pointer">
                      {text}
                    </li>
                  </Link>
                ))}
                <Link to="/granier/shoppingCart">
                  <li>
                    <img className="w-10 mt-2" src="/Carrito.png" alt="" />
                  </li>
                </Link>
                <Link to="/profile">
                  <li>
                    <img
                      className="w-12"
                      src="/Logoperfilusuarioengranier.png"
                      alt=""
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && renderContent(granierLinks)}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "white" }} />
            ) : (
              <CiMenuFries style={{ color: "white" }} />
            )}
          </button>
        </div>
      </nav>
    );
  } else {
    const profileLinks = [{ to: "/profile", text: "Perfil" }];

    return (
      <nav className="bg-blanco-hueso">
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
          <div className="flex items-center flex-1">
            <Link to="/">
              <img className="w-24" src="/MetroEats.png" alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8">
                {profileLinks.map(({ to, text }) => (
                  <li
                    key={to}
                    className="hover:text-azul-oscuro-granier transition border-b-2 hover:border-naranja-unimet cursor-pointer"
                  >
                    <Link to={to}>
                      <button className="bg-paypal hover:bg-blue-700 text-white py-2 px-4 rounded">
                        {text}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>{click && renderContent(profileLinks)}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "orange" }} />
            ) : (
              <CiMenuFries style={{ color: "orange" }} />
            )}
          </button>
        </div>
      </nav>
    );
  }
};

export default ChangingNavBar;
