// OrderCard.js
import PropTypes from 'prop-types';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white max-w-5xl rounded-lg text-black border-azul-oscuro-granier shadow-xl border-2 font-robotoBold m-8 flex flex-wrap md:justify-between justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
        <ul className="m-0 p-0 list-none">
          <li className="p-4"># {order.orderId}</li>
          <li className="p-4">Nombre del usuario: {order.userName}</li>
          <li className="p-4">Fecha de entrega: {order.deliveryDate}</li>
          <li className="p-4">Monto: {order.amount}</li>
          <li className="p-4">Sitio de entrega: {order.deliveryPlace}</li>
          <button className="bg-paypal text-white hover:bg-azul-oscuro-granier py-2 px-4 rounded-full">
            Pedido Entregado
          </button>
        </ul>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
        <h1 className="m-0 p-4">Productos</h1>
        <ul className="m-0 p-0 list-none">
          {order.products.map((product, index) => (
            <li key={index} className="p-4">{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    deliveryPlace: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OrderCard;