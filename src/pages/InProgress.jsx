import { Link } from "react-router-dom";
const InProgress = () => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center"><h1 className="text-3xl font-black">Lo Sentimos Mucho{<br/>} Esta página se encuentra en Construcción</h1></div>
        <div><img
              src="/Construction.png"
              alt="Gato 404"
              className="max-w-3xl"
          />
        </div>
      </div>
      
    </>
  );
};

export default InProgress;
