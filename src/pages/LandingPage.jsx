
import Hero from "../ui/Hero";

const LandingPage = () => {
  //Colocar clases css o bootstrap a cada uno y a las imagenes
  return (
    <>
      <div>
        <Hero />
        <div className="flex flex-col items-center m-4">
          <p className="text-6xl font-bold text-black p-20">¿Qué deseas para hoy?</p>
          <a href="/Granier" className="mb-4">
            <img className="rounded-lg w-85 h-a" src="/Granier-Photo-Button.png" alt="Foto Granier" />
          </a>
          <a href="/inprogress">
            <img className="rounded-lg w-85 h-a" src="/Kiosko-Photo-Button.png" alt="Foto Kiosko Belive" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
