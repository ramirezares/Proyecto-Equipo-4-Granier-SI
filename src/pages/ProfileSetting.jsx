import { useState } from "react";


function Profile() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState("");
    const [checkboxGroup, setCheckboxGroup] = useState([]);

    console.log(checkboxGroup)
const handleFNameChange = (e) => {
    setFName(e.target.value);
};

const handleLNameChange = (e) => {
    setLName(e.target.value);
};

const handlePhoneChange = (e) => {
    setPhone(e.target.value);
};

const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or update user profile here
    console.log("Profile updated!");
};

return (
    <div className="border-2  border-gray-200 max-w-3xl mx-4 sm:mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">
            Configuración del Perfil
        </h2>
        <hr className="h-px mb-5 bg-gray-200 border-0"></hr>
        <form onSubmit={handleSubmit}>
            
            {/*Foto de Perfil/ input image */}
            <div className="flex justify-center mb-4" style={{ alignItems: 'center' }}>

            <img
                src={photo || "/blank-profile-picture.png"}
                alt="Profile Picture"
                className="w-1/3 h-auto rounded-full border-2 border-gray-200 mr-4"
            />
            <input
                type="file"
                id="photo"
                className="w-2/3 flex-grow flex-shrink text-md ml-5 pl-4 mx-auto"
                onChange={handlePhotoChange}
            />

            </div>
        
            {/*Nombre / Apellido/ Telefono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Nombre
                </label>
                <input
                type="text"
                id="name"
                value={fName}
                onChange={handleFNameChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">
                Apellido
                </label>
                <input
                type="text"
                id="lastname"
                value={lName}
                onChange={handleLNameChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                Teléfono
                </label>
                <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            </div>

            {/*Preferencias Alimentarias Checkbox */}
            <div className="mt-5  mb-5">
                <label className="block text-gray-700 font-bold mb-2">
                Preferencias alimentarias
                </label>

            <div className="flex-col sm:flex mx-3">
                {/*Checkbox Opcion 1 */}
                <div className="form-checkbox h-5 w-5 md:w-1/3 px-3 mb-5">
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
                <div className="form-checkbox h-5 w-5 md:w-1/3  px-3 mb-5">
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
                <div className="form-checkbox h-5 w-5 md:w-1/3 px-3 mb-5">
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

            <button
            type="submit"
            className="bg-[#FF8200] hover:bg-[#E97700] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-20 sm:mt-2"
            >
            Guardar Cambios
            </button>
        </form>
    </div>
);
}

export default Profile;
