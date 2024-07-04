import React, {useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../hooks/CartContext";
import { OrdersContext } from "../hooks/OrdersContext";

function CheckoutPage() {
  
  const { getCart } = useContext(CartContext);
  const cartItems = getCart();
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  // Manejar
  const generateOrderNumber = () => {
    return 1
  };

  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form)
    const orderNumber = generateOrderNumber();
    const delivered = false;
    const id = form.ID.value;
    const deliveryPoint = form.deliveryPoint.value;
    const deliveryDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString();

    const order = {
      orderNumber,
      delivered,
      id,
      deliveryDate,
      totalAmount: calculateTotalAmount(cartItems),
      deliveryPoint,
      cartItems,
    };

    console.log("Pedido creado:", order);
    
    // Manejar pago con paypal

    const achieved = true;

    if (achieved) {
      addOrder(order);
      //Alargar para que envie a la BD con estado de la pagina
      navigate('/granier/shoppingcart/successful');
    }

  };

    return (
      <div className="md:flex flex-wrap justify-center md:mx-auto my-10">

        <div className=" max-w-lg sm:w-1/2 w-80 md:mr-20 container mx-auto mb-4">
          <div className="border-2 border-gray-200 items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg" id="input">
            <label className="block mb-2 text-lg font-bold text-gray-900">
                    Detalles de la Orden
                  </label>
            <form onSubmit={handleSubmit}>
                {/*Cedula*/}
                
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    minLength="7"
                    maxLength="8"
                    name="ID"
                    id="ID"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Ingrese su cédula
                  </label>
                </div>

                {/*Dropdown */}
                <div className="my-8 flex flex-wrap justify-left">
                  <label className="block mb-2 text-md font-medium text-gray-900">
                    Selecciona el Sitio de Retiro
                  </label>
                  <select
                    className="text-white bg-[#34394B] hover:bg-[#34394B] focus:ring-4 focus:outline-none focus:ring-white-300  rounded-lg  px-5 py-2.5  w-full"
                    name = "deliveryPoint"
                    required
                  >
                    <option value="">Seleccionar sitio</option>
                    <option value="granier">Granier</option>
                    <option value="feria">Feria</option>
                    <option value="saman">Saman</option>
                    <option value="biblioteca">Biblioteca</option>
                  </select>
                </div>


                {/*Boton Paypal */}
                <div className="mt-10 flex flex-wrap justify-center" id="paypalButton">
                <button type="submit" value="Submit" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                Check out with PayPal
                </button>
                </div>
            </form>
          </div>
        </div>
        
        <div className=" max-w-lg md:w-1/2 w-80 md:ml-20 container mx-auto">
          <div className="border-2 border-gray-200 items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg" id="input">
            <h2 className="block mb-2 text-lg font-bold text-gray-900">Resumen de Pedido</h2>
            

            <ul className="list-none mb-4">
                <div className="mt-6 grow sm:mt-8 lg:mt-0">
                  <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 ">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 ">Precio Base</dt>
                        <dd className="text-base font-medium text-gray-900 ">{calculateTotalAmount(cartItems)}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">Envio</dt>
                        <dd className="text-base font-medium text-green-500">Envio Gratis</dd>
                      </dl>


                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                      <dt className="text-base font-bold text-gray-900 ">Total</dt>
                      <dd className="text-base font-bold text-gray-900 ">{calculateTotalAmount(cartItems)}</dd>
                      
                    </dl>
                    <dl><p className="text-center text-gray-500 lg:text-left">Impuestos incluidos en el precio. </p></dl>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-8">
                    <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                    <img className="hidden h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                  </div>
                  </div>
            </ul>
          </div>
        </div>


      </div>
    );
  }
  
  export default CheckoutPage;