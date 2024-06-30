import { Link } from "react-router-dom";
import "./HomeEmployee.style.css";
import Hero from "../ui/Hero";

const HomeEmployee = () => {
  return (
    <>
      <div className="bg-azul-oscuro-granier min-h-screen">
        <Hero />
        <div className="container mx-auto pt-8 pb-20 md:pt-12 lg:pt-20">
          <div className="lg:flex items-center justify-between mb-12">
            <div className="ml-20 flex-col gap-4 flex text-black font-robotoBold items-center">
              <Link spy={true} smooth={true} to="/register">
                <button className="text-5xl px-40 bg-beige-granier border-white border-4 hover:bg-naranja-unimet py-4 rounded-full">
                  Ir al Menú
                </button>
              </Link>
              <Link spy={true} smooth={true} to="/register">
                <button className="text-4xl px-4 bg-beige-granier border-white border-4 hover:bg-naranja-unimet py-2 rounded-full">
                  Agregar producto o promoción
                </button>
              </Link>
              <Link spy={true} smooth={true} to="/register">
                <button className="text-4xl px-28 bg-beige-granier border-white border-4 hover:bg-naranja-unimet py-2 rounded-full">
                  Gestionar pedidos
                </button>
              </Link>
              <Link spy={true} smooth={true} to="/register">
                <button className="mb-4 text-4xl px-40 bg-beige-granier border-white border-4 hover:bg-naranja-unimet py-2 rounded-full">
                  Ver reseñas
                </button>
              </Link>
            </div>
            <div className="mx-auto mb-12">
              <img className="w-full " src="/Chicacafe2.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEmployee;
