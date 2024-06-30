import { useState } from "react";

const ProductSetting = () => {
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);




    const handleSubmit = (e) => {
    e.preventDefault();
    // Add product logic here

        console.log(
        "Product added:",
        productDescription,
        productPrice
        );

    };

return (
    <>
    <div className="max-w-3xl mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">
        Configuración de Producto/Promoción
        </h2>
        <hr className="h-px mb-5 bg-gray-200 border-0"></hr>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        
        <div className="grid md:grid-cols-2 md:gap-6">
            
            {/*Precio del Producto */}
            <div className="w-full md:w-1/2">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                    type="number"
                    name="floating_password"
                    min="0"
                    step="0.01"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Precio del Producto
                    </label>
                </div>
            </div>
            

            {/*Disponibilidad del Producto */}  
            <label className="inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#AD986E]"></div>
                <span className="ms-3 text-sm font-medium text-gray-900">Toggle me</span>
            </label>

        </div>
            
        {/*Descripcion del Producto */}
        <div className="w-full px-3 mb-5 group">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Descripción
        </label>
        <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="..."
            minLength={20}
            maxLength={200}
            onChange={(e) => setProductDescription(e.target.value)}
            required
        ></textarea>
        </div>





            {/*Boton de Submit */}
            <div className="flex justify-center">
                <button
                type="submit"
                className="text-white bg-[#34394B] hover:bg-[#34394B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                Guardar Cambios
                </button>
            </div>
    </form>
    </div>
</>
);
};

export default ProductSetting;
