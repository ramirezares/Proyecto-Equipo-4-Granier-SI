import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Profile() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <div>Cargando...</div>; // O algún otro indicador de carga
  }

  const handleEditProfile = () => {
    navigate("/profile/Setting");
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="border-2 border-gray-200 max-w-3xl mx-4 sm:mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ver Perfil</h2>
        <hr className="h-px mb-5 bg-gray-200 border-0"></hr>

        <div className="flex justify-center mb-4">
          <img
            src={user.image || "/blank-profile-picture.png"}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full border-2 border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.firstName}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.lastName}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.email}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.number}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="ocupation"
              className="block text-gray-700 font-bold mb-2"
            >
              Ocupación
            </label>
            <input
              type="text"
              id="ocupation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.occupation}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="field"
              className="block text-gray-700 font-bold mb-2"
            >
              Carrera/Departamento
            </label>
            <input
              type="text"
              id="field"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user.career}
              readOnly
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-gray-700 font-bold mb-2">
            Preferencias Alimentarias
          </h2>
          <ul>
            {user.foodPreference &&
              user.foodPreference.map((preference, index) => (
                <li key={index} className="text-gray-700">
                  {preference}
                </li>
              ))}
          </ul>
        </div>

        <div className="mt-14 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleEditProfile}
          >
            Editar Perfil
          </button>
          <button
            className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-200 max-w-3xl mx-4 sm:mx-auto p-4 pt-6 pb-8 m-10 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Historial de Pedidos</h2>
        <hr className="h-px mb-5 bg-gray-200 border-0"></hr>
        {/* Aquí puedes agregar el código para mostrar el historial de pedidos del usuario */}
      </div>
    </>
  );
}

export default Profile;
