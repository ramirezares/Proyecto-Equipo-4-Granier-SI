import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderCard = () => {
  return (
    <div className="bg-white max-w-5xl rounded-lg text-black border-azul-oscuro-granier shadow-xl border-2 font-robotoBold m-8 flex flex-wrap md:justify-between justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
        <ul className="m-0 p-0 list-none">
          <li className="p-4"># Numero de Pedido</li>
          <li className="p-4">Nombre del usuario: Diego Mendez </li>
          <li className="p-4">Fecha de entrega:</li>
          <li className="p-4">Monto: 400</li>
          <li className="p-4">Sitio de entrega:</li>
          <button className="bg-paypal text-white hover:bg-azul-oscuro-granier py-2 px-4 rounded-full">
            Pedido Entregado
          </button>
        </ul>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
        <h1 className="m-0 p-4">Productos</h1>
        <ul className="m-0 p-0 list-none">
          <li className="p-4">Producto 1</li>
          <li className="p-4">Producto 2</li>
          <li className="p-4">Producto 3</li>
          <li className="p-4">Producto 4</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;