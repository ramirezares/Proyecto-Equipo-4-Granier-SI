import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [radioGroup1, setRadioGroup1] = useState("");
  const [radioGroup2, setRadioGroup2] = useState("");
  const [radioGroup3, setRadioGroup3] = useState("");
  const [checkboxGroup, setCheckboxGroup] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product logic here
    
      console.log(
        "Product added:",
        productName,
        productDescription,
        productPrice,
        productImage,
        radioGroup1,
        radioGroup2,
        radioGroup3,
        checkboxGroup
      );
    
  };

  return (
    <div className="border-2 border-gray-200 max-w-3xl mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Creación de Producto/Promoción
      </h2>
      <hr className="h-px mb-5 bg-gray-200 border-0"></hr>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-wrap -mx-3">
          {/*Nombre del Producto */}
          <div className="w-full md:w-1/2 px-3 mb-5 group">
            <div className="relative z-0 w-full mb-5 group">
              <input
                minLength="4"
                id="productName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Nombre del Producto
              </label>
            </div>
          </div>

          {/*Precio del Producto */}
          <div className="w-full md:w-1/2 px-3 mb-5 group">
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
        </div>

        <div className="flex flex-wrap -mx-3">
          {/*Descripcion del Producto */}
          <div className="w-full md:w-1/2 px-3 mb-5 group">
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

          {/*Subir Fotos */}
          <div className="w-full md:w-1/2 px-3 mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="productImage"
              type="file"
              onChange={(e) => setProductImage(e.target.value)}
              required
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="productImageHelp"
            ></div>
          </div>
        </div>

        <hr className="h-px mb-5 bg-gray-200 border-0"></hr>
        <div className="flex flex-wrap -mx-3 font-bold  block mb-5 text-gray-700">
          <h1>Características del Producto/Promoción</h1>
        </div>

        <div className="flex flex-wrap -mx-3">

          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Radio Group 1 */}
            <div className="relative mb-5 group">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Creación de
              </label>

              <div className="flex flex-wrap mx-3">
                {/*Grupo 1 Opcion 1 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio1-1"
                    name="radioGroup1"
                    value="promotion"
                    onChange={(e) => setRadioGroup1(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Promo</label>
                </div>

                {/*Grupo 1 Opcion 2 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio1-2"
                    name="radioGroup1"
                    value="product"
                    onChange={(e) => setRadioGroup1(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Producto</label>
                </div>

              </div>
            </div>

            {/* Radio Group 3 */}
            <div className="relative mb-5 group">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tipo de Comida
              </label>
              <div className="flex flex-wrap -mx-3">
                {/*Grupo 3 Opcion 1 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio3-1"
                    name="radioGroup3"
                    value="breakfast"
                    onChange={(e) => setRadioGroup3(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Desayuno</label>
                </div>

                {/*Grupo 3 Opcion 2 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio3-2"
                    name="radioGroup3"
                    value="lunch"
                    onChange={(e) => setRadioGroup3(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Almuerzo</label>
                </div>

                {/*Grupo 3 Opcion 3 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio3-3"
                    name="radioGroup3"
                    value="dinner"
                    onChange={(e) => setRadioGroup3(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Cena</label>
                </div>

                {/*Grupo 3 Opcion 4 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio3-4"
                    name="radioGroup3"
                    value="dessert"
                    onChange={(e) => setRadioGroup3(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Postre</label>
                </div>
              </div>
            </div>
            </div>


          <div className="grid md:grid-cols-2 md:gap-6">
            {/* Radio Group 2 */}
            <div className="relative mb-5 group">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Tipo de Producto/Promoción
              </label>
              <div className="flex flex-wrap -mx-3">
                {/*Grupo 2 Opcion 1*/}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio2-1"
                    name="radioGroup2"
                    value="drink"
                    onChange={(e) => setRadioGroup2(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Bebida</label>
                </div>

                {/*Opcion 2 Grupo 3 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="radio"
                    id="radio3-2"
                    name="radioGroup3"
                    value="food"
                    onChange={(e) => setRadioGroup3(e.target.value)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Comida</label>
                </div>

              </div>
            </div>
          
            {/* Checkbox Group */}
            <div className="relative mb-5 group">

              <label className="block mb-2 text-sm font-medium text-gray-900">
              Preferencias alimentarias
              </label>

              <div className="flex flex-wrap -mx-3">
                {/*Checkbox Opcion 1 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkboxGroup"
                    value="vegan"
                    onChange={(e) => setCheckboxGroup(e.target.checked)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Vegana</label>
                </div>

                {/*Checkbox Opcion 2 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="checkboxGroup"
                    value="vegetariam"
                    onChange={(e) => setCheckboxGroup(e.target.checked)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Vegetariana</label>
                </div>

                {/*Checkbox Opcion 3 */}
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="checkboxGroup"
                    value="glutenFree"
                    onChange={(e) => setCheckboxGroup(e.target.checked)}
                  />
                  <label className="ml-2 text-sm text-gray-600">Libre de Glutén</label>
                </div>
              
              </div>

            </div> 
          </div>

        </div>

        {/*Boton de Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-[#34394B] hover:bg-[#34394B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Agregar al Menú
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
