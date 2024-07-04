import React, { useContext, useState } from 'react';
import SearchBar from '../ui/SearchBar';
import MenuCards from '../ui/MenuCards.jsx';
import { MenuContext } from '../hooks/MenuContext.jsx';
import { CartContext } from '../hooks/CartContext.jsx';

const Menu = () => {
  const {menu} = useContext(MenuContext)
  const {addToCart} = useContext(CartContext)
  const [filteredProducts, setFilteredProducts] = useState(menu);

  const handleSearch = (products) => {
    setFilteredProducts(products);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Producto añadido."+product.name)
  };

  //Estilar
  return (
    <div className="font-robotoBold">
      <div className="menu flex justify-center text-5xl sm:text-6xl m-12 text-beige-granier">
      <h1>Menú Granier</h1>
      </div>
      <SearchBar products={menu} onSearch={handleSearch} />
      <MenuCards products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Menu;
