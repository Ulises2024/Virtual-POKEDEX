import React from "react";
import './Menu.css'
const Menu = ({ onOptionClick }) => {
  return (
    <div className="menu_conf flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Menú</h2>
      <ul className="space-y-3 w-full">
        <li>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => onOptionClick(1)}
          >
            Páginas / Búsqueda
          </button>
        </li>
        <li>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => onOptionClick(2)}
          >
            Favoritos
          </button>
        </li>
        <li>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => onOptionClick(3)}
          >
            Clasificador
          </button>
        </li>
        <li>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => onOptionClick(4)}
          >
            Lista de capturas
          </button>
        </li>
        <li>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => onOptionClick(5)}
          >
            Hora / Fecha
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
