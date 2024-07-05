import { useState, useEffect } from "react";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const productList = await getAllProducts();
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const newProductId = await addProduct(product);
      setProducts([...products, { id: newProductId, ...product }]);
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      await updateProduct(id, updatedProduct);
      setProducts(
        products.map((product) =>
          product.id === id ? { id, ...updatedProduct } : product
        )
      );
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  };
};

export default useProducts;
