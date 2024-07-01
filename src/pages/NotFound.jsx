import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="max-w-md p-10 md:p-20 lg:p-30">
        <p className="text-lg md:text-2xl lg:text-3xl">{error.statusText || error.message}</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
          Volver al inicio
        </Link>
        <div className="flex justify-center mt-10 md:mt-20 lg:mt-30">
          <img
            src="../../public/404-Error.png"
            alt="Gato 404"
            className="max-w-lg md:max-w-2xl  lg:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
