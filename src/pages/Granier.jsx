import Hero from "../ui/Hero";
import Products from "../ui/Products";
import Promotions from "../ui/Promotions";
import Reviews from "../ui/Reviews";
import { Link } from "react-router-dom";
import "./Granier.style.css";
import usePromotions from "../hooks/usePromotions";
import useProducts from "../hooks/useProduct";

const reviews = [
  { user: "Usuario 1", text: "Reseña del Usuario 1" },
  { user: "Usuario 2", text: "Reseña del Usuario 2" },
  { user: "Usuario 3", text: "Reseña del Usuario 3" },
];

const Granier = () => {
  const {
    promotions,
    loading: promotionsLoading,
    error: promotionsError,
  } = usePromotions();
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useProducts();

  return (
    <div className="bg-azul-oscuro-granier">
      <Hero />
      {promotionsLoading ? (
        <p>Loading promotions...</p>
      ) : promotionsError ? (
        <p>Error: {promotionsError}</p>
      ) : (
        <Promotions promotions={promotions} />
      )}
      {productsLoading ? (
        <p>Loading products...</p>
      ) : productsError ? (
        <p>Error: {productsError}</p>
      ) : (
        <Products products={products} />
      )}
      <Reviews reviews={reviews} />
      <div className="our-contacts md:flex-row flex-col md:justify-around font-robotoRegular p-4 gap-4">
        <p className="font-robotoBold md:text-xl mt-3 mx-auto">
          ¿Deseas comunicarte con Nosotros?
        </p>
        <Link
          to="/granier/contact"
          className="rounded-full hover:bg-naranja-unimet border-0 bordered-blue-background"
        >
          Información de contacto
        </Link>
        <Link
          to="/granier/sugestions"
          className="rounded-full hover:bg-naranja-unimet border-0 bordered-blue-background"
        >
          Sugerencias y reclamos
        </Link>
      </div>
    </div>
  );
};

export default Granier;
