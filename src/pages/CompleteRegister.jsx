const CompleteRegister = () => {
  //const [phone, setPhone] = useState("");
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-10 p-10">
        {/*Div de Imagen MetroEats */}
        <div className="image w-1/2 flex justify-center items-center p-15  ml-20">
          <img src="/MetroEats.png" className="rounded-lg" alt="Logo Unimet" />
        </div>

        {/*Div de Formulario */}
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg">
            <h2 className="text-2xl font-semibold mt-4">Paso Final de Registro</h2>
              <label htmlFor="occupation" className="font-bold mt-6 block mb-2 text-gray-700">
                Ocupación en la Universidad Metropolitana
              </label>

              {/*Dropdowns Ocupacion y Departamento */}
            <div className="flex justify-between gap-4">

                <div className="w-1/2">

                  <select
                    id="occupation"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <option value="">Seleccionar</option>
                    <option value="student">Estudiante</option>
                    <option value="teacher">Docente</option>
                    <option value="staff">Personal Administrativo</option>
                  </select>
                </div>
                
                <div className="w-1/2">
                  <select
                    id="department"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    <option value="">Seleccionar</option>
                    <option value="student">Ing. de Sistemas</option>
                    <option value="teacher">Ing. Química</option>
                    <option value="staff">Matemáticas Industriales</option>
                  </select>
                </div>
            </div>




            <div className="mt-6">
              <label htmlFor="allergies" className="block mb-2 text-gray-700 text-center font-bold">
                Preferencias alimentarias
              </label>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <input type="checkbox" id="veganism" className="mr-2" />
                  <label htmlFor="veganism" className="text-gray-700">
                    Veganismo
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="vegetarianism" className="mr-2" />
                  <label htmlFor="vegetarianism" className="text-gray-700">
                    Vegetarianismo
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="glutenFree" className="mr-2" />
                  <label htmlFor="glutenFree" className="text-gray-700">
                    Gluten Free
                  </label>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Crear nueva Cuenta
            </button>
          </div>
        </div>
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
