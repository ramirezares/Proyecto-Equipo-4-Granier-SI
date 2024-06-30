import React, { useState } from "react";
import "./styles/SearchBar.style.css";

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    foodPreference: {
      Vegetariano: false,
      Vegano: false,
      LibreDeGluten: false,
    },
    kindProduct: {
      Bebida: false,
      Platillo: false,
    },
    kindFood: {
      Desayuno: false,
      Almuerzo: false,
      Cena: false,
      Merienda: false,
    },
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    applyFilters(value, filters);
  };

  const handleFilterChange = (category, filter) => {
    const newFilters = {
      ...filters,
      [category]: {
        ...filters[category],
        [filter]: !filters[category][filter],
      },
    };
    setFilters(newFilters);
    // No aplicar filtros automáticamente, esperar a que el usuario haga clic en "Aplicar"
  };

  const applyFilters = (term, filters) => {
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(term.toLowerCase());
      const matchesFoodPreference = Object.keys(filters.foodPreference).every(
        (key) => !filters.foodPreference[key] || product.foodPreference === key
      );
      const matchesKindProduct = Object.keys(filters.kindProduct).every(
        (key) => !filters.kindProduct[key] || product.kindProduct === key
      );
      const matchesKindFood = Object.keys(filters.kindFood).every(
        (key) => !filters.kindFood[key] || product.kindFood === key
      );
      return (
        matchesSearch &&
        matchesFoodPreference &&
        matchesKindProduct &&
        matchesKindFood
      );
    });
    onSearch(filteredProducts);
  };

  const handleApplyFilters = () => {
    applyFilters(searchTerm, filters);
    setDropdownOpen(false);
  };

  return (
    <div className="search-bar-contanier">
      <div className="search-bar">
        <img src="/LupaBusqueda.png" alt="" />
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          | Filtros ↓
        </button>
        {dropdownOpen && (
          <div className="filter-menu">
            <div className="filter-category">
              <h3>Preferencia Alimenticia</h3>
              {Object.keys(filters.foodPreference).map((filter) => (
                <label key={filter}>
                  <input
                    type="checkbox"
                    checked={filters.foodPreference[filter]}
                    onChange={() =>
                      handleFilterChange("foodPreference", filter)
                    }
                  />
                  {filter}
                </label>
              ))}
            </div>
            <div className="filter-category">
              <h3>Tipo de Producto</h3>
              {Object.keys(filters.kindProduct).map((filter) => (
                <label key={filter}>
                  <input
                    type="checkbox"
                    checked={filters.kindProduct[filter]}
                    onChange={() => handleFilterChange("kindProduct", filter)}
                  />
                  {filter}
                </label>
              ))}
            </div>
            <div className="filter-category">
              <h3>Tipo de Comida</h3>
              {Object.keys(filters.kindFood).map((filter) => (
                <label key={filter}>
                  <input
                    type="checkbox"
                    checked={filters.kindFood[filter]}
                    onChange={() => handleFilterChange("kindFood", filter)}
                  />
                  {filter}
                </label>
              ))}
            </div>
            <button
              onClick={handleApplyFilters}
              className="apply-filters-button"
            >
              Aplicar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
