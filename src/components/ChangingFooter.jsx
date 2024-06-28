import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/ChangingFooter.style.css";

const ChangingFooter = () => {
  const [isGranierPage, setIsGranierPage] = useState(false);

  useEffect(() => {
    setIsGranierPage(window.location.pathname.includes("granier"));
  }, [window.location.pathname]);       //Revisar

  if (isGranierPage) {
    return (
      <>
        <div className="granier-info">
          <p>© GRANIER VENEZUELA | Derechos reservados</p>
        </div>
        <div className="metroeats-info">
          <p>
            Página Principal de la Universidad Metropolitana:{" "}
            <a className="noDecoration" href="https://www.unimet.edu.ve/">https://www.unimet.edu.ve/</a>
          </p>
          <Link to="/">
            <img src="/MetroEatsNaranja.png" alt="" height="90" />
          </Link>
          <p>
            Copyright © 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="metroeats-info">
          <p>
            Página Principal de la Universidad Metropolitana:{" "}
            <a className="noDecoration" href="https://www.unimet.edu.ve/">https://www.unimet.edu.ve/</a>
          </p>
          <Link to="/">
            <img src="/MetroEatsNaranja.png" alt="" height="90" />
          </Link>
          <p>
            Copyright © 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
        </div>
      </>
    );
  }
};

export default ChangingFooter;
