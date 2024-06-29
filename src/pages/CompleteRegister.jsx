import { useState } from "react";









const CompleteRegister = () => {
  const [phone, setPhone] = useState("");
  console.log(phone)

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-10 p-10">
        {/*Div de Imagen MetroEats */}
        <div className="image w-1/2 flex justify-center items-center p-15  ml-20">
          <img src="/MetroEats.png" className="rounded-lg" alt="Logo Unimet" />
        </div>

        {/*Div de Formulario */}
        <form onSubmit={null} className="w-1/2 flex justify-center">
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold mt-5 mb-10">Paso Final de Registro</h2>
            </div>

            {/*Numero de Telefono */}
            <div className="mb-3">
            <div className="relative">
                <span className="absolute start-0 bottom-3 text-black">
                    <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                    </svg>
                </span>
                <input 
                type="text" 
                id="floating-phone-number" 
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                pattern="(+58)[0-9]{10}" 
                placeholder=" " 
                onChange={(e) => setPhone(e.target.value)}  
                required/>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número de Teléfono</label>
            </div>
            <p id="helper-text-explanation" className="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">El formato del número debe ser +581234567890</p>
            </div>




            <label htmlFor="occupation" className="font-bold  block mb-5 text-gray-700">
            Ocupación en la Universidad Metropolitana</label>

              {/*Dropdowns Ocupacion y Departamento */}
            <div className="flex flex-col gap-4">
                {/*Ocupacion */}
                <div className="">
                  <select id="occupation" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                    <option value="">Seleccionar</option>
                    <option value="student">Estudiante</option>
                    <option value="teacher">Docente</option>
                    <option value="staff">Personal Administrativo</option>
                  </select>
                </div>
                {/*Departamento */}
                <div className="">
                  <select id="department" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                    <option value="">Seleccionar</option>
                    <option value="student">Ing. de Sistemas</option>
                    <option value="teacher">Ing. Química</option>
                    <option value="staff">Matemáticas Industriales</option>
                  </select>
                </div>
            </div>

            {/*Preferencias Alimentarias CheckBox */}
            <div className="mt-6">

              <label className="block mb-2 text-gray-700 text-center font-bold">Preferencias alimentarias</label>

              <div className="flex flex-wrap gap-4">

                {/*Checkbox Veganismo */}
                <div className="flex items-center">
                  <input type="checkbox" id="veganism" className="mr-2" />
                  <label htmlFor="veganism" className="text-gray-700">
                    Veganismo
                  </label>
                </div>

                {/*Checkbox Vegetariano */}
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="vegetarianism" className="mr-2" />
                  <label htmlFor="vegetarianism" className="text-gray-700">
                    Vegetarianismo
                  </label>
                </div>

                {/*Checkbox Gluten Free */}
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="glutenFree" className="mr-2" />
                  <label htmlFor="glutenFree" className="text-gray-700">
                    Gluten Free
                  </label>
                </div>

              </div>

            </div>

            {/*Boton terminar Registro */}
            <button onClick={SubmitEvent} className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Crear nueva Cuenta
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};
export default CompleteRegister;

/*
<div className="mb-3">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                +58
              </span>
              <input
                placeholder="Teléfono"
                type="tel"
                className="form-control"
                id="phone"
                aria-label="Teléfono"
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
              />
            </div>

            preferencias alimentarias
            <div className="mb-3">
                    <div className="p">
                      <p>Preferencias alimentarias</p>
                    </div>

                    <div className="input-group mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="veganCheck"
                        />
                        <label className="form-check-label">Veganismo</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="vegetarianCheck"
                        />
                        <label className="form-check-label">
                          Vegetarianismo
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="glutenFreeCheck"
                        />
                        <label className="form-check-label">
                          Libre de Gluten
                        </label>
                      </div>
                    </div>
                  </div>
      </div>
*/
