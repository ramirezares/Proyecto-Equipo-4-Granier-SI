const Sugestions = () => {

    return (

        <div className="border-2  border-gray-200 max-w-3xl mx-4 sm:mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md" >
            <h1 style={{ color: '#34394B' }} className="text-3xl font-black mb-4 ">Sugerencias y Reclamos</h1>
            <hr className="h-px mb-5 bg-gray-300 border-0" />
            <p className="text-lg">En esta sección usted podrá enviarnos la retroalimentación necesaria para poder mejorar su experiencia en Granier.</p>
            
            <form onSubmit={null}>
                {/*Input Pequeño */}
                <div className="block mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Concepto</label>
                    <input 
                        type="text" 
                        id="first_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="..." 
                        required />
                </div>

                {/*Input Grande */}
                <div className="block mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Cuéntanos</label>
                <textarea 
                    id="message" 
                    rows="4" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Escribe lo que pienses aquí..." 
                    required
                    />
                </div>
                
                {/*Boton*/}
                <div className="block mb-4 text-right">
                    <button
                        className="bg-[#AD986E] hover:bg-[#AD986E] text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Sugestions;
