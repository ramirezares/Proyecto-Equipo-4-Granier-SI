
const InProgress = () => {
  return (
    <>
    <div className="flex justify-center m-5">
    <p className="text-3xl font-bold text-[#FF8200] text-center">
    Lo sentimos {<br/>}
    Esta página se encuentra en construcción
          </p>
    </div>
    
    <div className="flex justify-center">
      
    <img
              src="/Construction-pana.png"
              alt="Gato 404"
              className="max-w-3xl"
          />
      </div>
    </>
  );
};

export default InProgress;
