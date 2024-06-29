import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
    <p>{error.statusText || error.message}</p>
      <Link to="/">Volver al inicio</Link>
    <div className="flex justify-center p-10 m-10">
      <img
              src="../../public/404-Error.png"
              alt="Gato 404"
              className=" max-w-lg"
          />
      </div>
    </>
  );
};

export default NotFound;
