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
      <footer className="text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  bg-naranja-unimet py-6">
        <h1
          className=" mx-auto lg:text-1xl  md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <p>© GRANIER VENEZUELA | Derechos reservados</p>s
          <p>
            Página Principal de la Universidad Metropolitana:{" "}
          </p>
          <a className="noDecoration" href="https://www.unimet.edu.ve/">https://www.unimet.edu.ve/</a>
        </h1>
        <div>
          <Link to="/">
            <img className=" mx-auto w-32  sm:w-52" src="/MetroEatsNaranja.png" alt="" />
          </Link>
        </div>

        <div>
        <h1
          className=" mx-auto lg:text-1xl  md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5">
          <p>
            Copyright © 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
        </h1>
        </div>
      </div>
    </footer>
    );
  } else {
    return (
      <footer className="text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-naranja-unimet py-7">
        <h1
          className=" mx-auto lg:text-1xl  md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <p>
            Página Principal de la Universidad Metropolitana:{" "}
            
          </p>
          <a className="noDecoration" href="https://www.unimet.edu.ve/">https://www.unimet.edu.ve/</a>
        </h1>
        <div>
          <Link to="/">
            <img className=" mx-auto w-32  sm:w-52" src="/MetroEatsNaranja.png" alt="" />
          </Link>
        </div>

        <div>
        <h1
          className=" mx-auto lg:text-1xl  md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5">
          <p>
            Copyright © 2024 - Universidad Metropolitana. Todos los derechos
            reservados.
          </p>
        </h1>
        </div>
      </div>
    </footer>
    );
  }
};

export default ChangingFooter;

/*
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
*/

/*
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
*/

