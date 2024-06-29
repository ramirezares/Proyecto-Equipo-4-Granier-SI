

const AboutUs = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-orange-500">Descubre nuestra</h1>
        <h1 className="text-4xl font-bold text-orange-500">Historia</h1>
      </div>

      <div className="flex justify-center mt-10">
        <img
          src="https://via.placeholder.com/500x500"
          alt="Panadero trabajando"
          className="rounded-lg"
        />
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-orange-500">
          De lo pequeño
        </h2>
        <h2 className="text-3xl font-bold text-orange-500">
          A lo grande
        </h2>
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

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="bg-gray-200 rounded-lg p-6">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Mapa del mundo"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">
            Para llevar la pasión de hacer lo que nos gusta
          </h3>
          <p className="text-sm mt-2">GRANIER</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Barco navegando"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">
            Embarcándonos hacia un nuevo destino
          </h3>
          <p className="text-sm mt-2">GRANIER</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Mapa con pin"
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">
            Decidimos asumir nuevos retos para llegar más lejos
          </h3>
          <p className="text-sm mt-2">GRANIER</p>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default AboutUs;
