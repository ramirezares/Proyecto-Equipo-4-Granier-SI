import React from "react";
import { Link } from "react-router-dom";
import "./HomeEmployee.style.css";
import Hero from "../ui/Hero";

const HomeEmployee = () => {
  return (
    <>
      <div>
        <Hero/>
        <div className="btn-contanier">
          <div className="buttons">
            <Link className="bordered-brown-background" to="/inprogress">
              Ir a Menú
            </Link>
            <Link className="bordered-brown-background" to="/inprogress">
              Agregar producto o promoción
            </Link>
            <Link className="bordered-brown-background" to="/inprogress">
              Gestionar pedidos
            </Link>
            <Link className="bordered-brown-background" to="/inprogress">
              Ver reseñas
            </Link>
          </div>
          <div className="img-contanier ">
            <img src="/Chicacafe.jpg" height="90" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEmployee;
