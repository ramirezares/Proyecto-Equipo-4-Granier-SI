import { useState, useEffect } from 'react';
import './ChangingHero.style.css';
import { Link } from 'react-router-dom';

const ChangingHero = () => {
  const [isGranierPage, setIsGranierPage] = useState(false);
  const [isGranierAdminPage, setIsGranierAdminPage] = useState(false);
  const [isAboutUsPage, setIsAboutUsPage] = useState(false);

  useEffect(() => {
    // Actualiza el estado según la ruta actual
    const pathname = window.location.pathname;
    setIsGranierPage(pathname.includes('granier') && !pathname.includes('homeEmployee') && !pathname.includes('granier/aboutUs'));
    setIsGranierAdminPage(pathname.includes('granier/homeEmployee'));
    setIsAboutUsPage(pathname.includes('granier/aboutUs'));
  }, []);

  if (isGranierAdminPage) {
    return (
      <div >
        <img className="w-full" src="/HeroAdminGranier.png" alt="" />
      </div>
    );
  }

  if (isGranierPage) {
    return (
      <div className="hero granier-hero">
        <img className="w-full" src="/HeroUserGranier.png" alt="" />
        <Link to="/granier/aboutUs" className='bordered-blue-background'>
        Conoce más
        </Link>
      </div>
    );
  }

  if (isAboutUsPage){
    return (
      <div className="hero about-granier-hero">
        <img src="/HeroAboutUsGranier.png" alt="" />
      </div>
    );
  }

  // Default Hero content
  return (
    <div className="hero default-hero">
      <img className="w-full" src="/HeroLanding.png" alt="" />
    </div>
  );
};

export default ChangingHero;
