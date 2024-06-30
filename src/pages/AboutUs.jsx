

const AboutUs = () => {
  return (
    <>
    <div className="container mx-auto p-20 m-20">

      <div className="flex justify-center mt-10 p-10">
        <div className="image w-1/2 mr-4">
          <img
              src="/panadero-trabajando.png"
              alt="Panadero trabajando"
              className="rounded-lg"
          />
        </div>
        <div className="information w-1/2">
          <div className="information text-center mt-10">
            <h2   style={{ color: '#AD986E' }} className="text-3xl font-bold text-orange-500">
              De lo pequeño
            </h2>
            <h2  style={{ color: '#34394B' }} className="text-5xl font-bold text-orange-500">
              A lo grande
            </h2>
            <br/>
            <p className="text-lg mt-5">
              Los orígenes de Granier se establecen en la panadería de barrio, de ahí
              el arraigo de la marca al comercio de proximidad y al oficio de
              panadero. En 1988 se abrió el Horno la Estrella, horno
              predecesor de Granier. Un negocio que fue creciendo y a través del
              cuál se fueron abriendo nuevas panaderías, hasta convertirnos en
              expertos y contar con un modelo de negocio propio.
            </p>
            <p className="text-lg mt-5">
              La franquicia española «Granier», que nació en el año 2010, es uno de
              los claros ejemplos de emprendimiento que pasa a convertirse en una
              empresa de prestigio no sólo en España, sino en varias ciudades
              del mundo como Roma, Lisboa, Londres y Miami; y ahora también en
              Venezuela
            </p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="bg-auto rounded-lg p-6">
          <img
            src="/mapa-del-mundo.png"
            alt="Mapa del mundo"
            className="rounded-lg"
          />
        </div>

        <div className="bg-auto rounded-lg p-6">
          <img
            src="/barco-navegando.png"
            alt="Barco navegando"
            className="rounded-lg"
          />
        </div>

        <div className="bg-auto rounded-lg p-6">

          <img
            src="/mapa-del-mundo2.png"
            alt="Mapa con pin"
            className="rounded-lg"
          />
          
        </div>
        
      </div>
    </div>
      
    </>
  );
};

export default AboutUs;
