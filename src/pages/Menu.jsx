import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import MenuCards from '../ui/MenuCards.jsx';

const initialProducts = [
  { name: 'Cafe', description: 'Caliente', price: 2.5, images: '*', foodPreference: '', kindProduct: 'Bebida', kindFood: 'Merienda' },
  { name: 'Pan', description: 'Fresco', price: 5.99, images: '*', foodPreference: 'Vegano', kindProduct: 'Platillo', kindFood: 'Desayuno' },
  { name: 'Cafe', description: 'Caliente', price: 2.5, images: '*', foodPreference: '', kindProduct: 'Bebida', kindFood: 'Merienda' },
  { name: 'Pan', description: 'Fresco', price: 5.99, images: '*', foodPreference: 'Vegano', kindProduct: 'Platillo', kindFood: 'Desayuno' },
  { name: 'Cafe', description: 'Caliente', price: 2.5, images: '*', foodPreference: '', kindProduct: 'Bebida', kindFood: 'Merienda' },
  { name: 'Pan', description: 'Fresco', price: 5.99, images: '*', foodPreference: 'Vegano', kindProduct: 'Platillo', kindFood: 'Desayuno' },
  // Momentaneo para probar
  //FoodPreference: Vegano, vegetariano o libre de gluten (Los de registro, ver si esos son los nombres)
  //KindProduct: Bebida, platillo o comestible
  //KindFood: Desayuno, almuerzo o cena
];

const Menu = () => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]); 
  // Cambiar. Cuando inicie la app se debe indicar si hay productos ya guardados.
  //Se puede hacer una funcion para darle el valor inicial a useState

  const handleSearch = (products) => {
    setFilteredProducts(products);
  };

  const handleAddToCart = (product) => {
    console.log("Producto añadido."+product.name)
    setCart([...cart, product]); //Hacer la funcion para agregar al carrito
  };

  //Estilar
  return (
    <div>
      <h1>Menu Granier</h1>
      <SearchBar products={initialProducts} onSearch={handleSearch} />
      <MenuCards products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Menu;
