import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
    <div className="flex justify-center m-10">
      <div className="flex-1">
        <Link
          to="/"
          className="text-3xl font-bold text-[#263238] border p-3 border-orange-500 border-4 rounded bg-[#FFDAB3]"
        >
          Volver al inicio
        </Link>
      </div>
      <div className="flex-2">
          <p className="text-3xl font-bold text-orange-500">
            {error.statusText || error.message}
          </p>
      </div>

      
    </div>  
    
    <div className="flex justify-center m-5">
      
      <img
              src="/404-Error.png"
              alt="Gato 404"
              className=" max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
