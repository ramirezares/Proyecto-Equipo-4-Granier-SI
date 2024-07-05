import { useContext } from 'react';
import { OrdersContext } from '../hooks/OrdersContext';
import { useNavigate } from "react-router-dom";

function GranierPage() {
    const { getLastOrderNumber, } = useContext(OrdersContext);
    const lastOrderNumber = getLastOrderNumber();

    const Navigate = useNavigate();

    return (

        <div className=" max-w-3xl my-5 container mx-auto">
            <div className="border-2 border-gray-200 items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg" id="input">
                <img
                    src="/Check.png" // Replace with your image
                    alt="Check"
                    className="mx-auto mb-6 w-40"
                    />
                
                
                <label className="block mb-2 text-4xl text-center font-semibold text-gray-900">
                Pago Confirmado
                </label>
                <p  className="block my-4 text-lg text-center font-md text-[#AD986E]">ORDEN {lastOrderNumber}</p>
                <p className="text-gray-600 mb-4 text-center"> Gracias por tu compra. Ahora que tu orden fue confirmada estaremos en contacto para la entrega.</p>
                
                <div className="flex flex-wrap">
                    <button
                        className="mx-auto py-2.5 mt-6 w-full px-4 py-2 bg-[#AD986E] text-white font-semibold rounded-lg hover:bg-[#B2A488] focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={()=>{Navigate("/granier")}}
                    >
                        Seguir Comprando
                    </button>
                </div>
                
            </div>
        </div>
);
}

export default GranierPage;