// hooks/usePromotions.js
import { useState, useEffect } from "react";
import { getAllPromotions } from "../controllers/promotion";

const usePromotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const fetchedPromotions = await getAllPromotions();
        setPromotions(fetchedPromotions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  return { promotions, loading, error };
};

export default usePromotions;
