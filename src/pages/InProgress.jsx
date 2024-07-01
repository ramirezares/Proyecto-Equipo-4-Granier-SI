import React from "react";
import ChangingFooter from "../components/ChangingFooter";
import ChangingNavBar from "../components/ChangingNavBar";
import { Link } from "react-router-dom";

const InProgress = () => {
  return (
    <>
      <Link to="/" className="block mb-4 md:hidden">Volver al inicio</Link>
      <div className="flex flex-col justify-center items-center h-screen md:flex-row">
        <div className="text-center md:text-2xl lg:text-3xl xl:text-4xl font-black">
          <h1>Lo Sentimos Mucho<br /> Esta página se encuentra en Construcción</h1>
        </div>
        <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 md:order-2">
          <img
            src="../../public/Construction.png"
            alt="Gato 404"
            className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </>
  );
};

export default InProgress;
