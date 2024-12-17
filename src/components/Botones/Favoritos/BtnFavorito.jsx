import React, { useState } from 'react';
import './BtnFavorito.css';

const BtnFavorito = ({
  pokeId, // Recibe el ID del Pokémon
  pantalla1Content,
  pantallaTipoContent,
}) => {
  const [favoritePokemonIds, setFavoritePokemonIds] = useState([]); // Lista de IDs almacenados
  const [mensajeFavorito, setMensajeFavorito] = useState(''); // Mensaje de confirmación

  const handleClick = () => {
    if (pokeId) {
      // Almacena el ID del Pokémon en la lista si no está ya en ella
      setFavoritePokemonIds((prevIds) => {
        if (!prevIds.includes(pokeId)) {
          return [...prevIds, pokeId];
        }
        return prevIds; // No duplicar IDs
      });

      // Mensaje de confirmación
      setMensajeFavorito(`¡Pokémon con ID ${pokeId} guardado como favorito!`);
      console.log(`ID del Pokémon almacenado: ${pokeId}`);

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => setMensajeFavorito(''), 3000);
    }
  };

  // Si no se cumplen las condiciones, no renderiza el botón
  if (!pantalla1Content || !pantallaTipoContent) return null;

  return (
    <div>
      <button
        className="btn btn_favorito bg-gold-500 text-white px-2 py-2 rounded shadow hover:bg-gold-700 transition duration-300"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-carambola"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17.108 22.085c-1.266 -.068 -2.924 -.859 -5.071 -2.355l-.04 -.027l-.037 .027c-2.147 1.497 -3.804 2.288 -5.072 2.356l-.178 .005c-2.747 0 -3.097 -2.64 -1.718 -7.244l.054 -.178l-.1 -.075c-6.056 -4.638 -5.046 -7.848 2.554 -8.066l.202 -.005l.115 -.326c1.184 -3.33 2.426 -5.085 4.027 -5.192l.156 -.005c1.674 0 2.957 1.76 4.182 5.197l.114 .326l.204 .005c7.6 .218 8.61 3.428 2.553 8.065l-.102 .075l.055 .178c1.35 4.512 1.04 7.137 -1.556 7.24l-.163 .003z" />
        </svg>
      </button>

      {/* Mensaje de confirmación */}
      {mensajeFavorito && (
        <div className="mt-2 text-green-600 font-bold">
          {mensajeFavorito}
        </div>
      )}

      {/* Mostrar lista de IDs almacenados */}
      {favoritePokemonIds.length > 0 && (
        <div className="mt-4 text-sm text-gray-700">
          <h4 className="font-bold">Pokémon favoritos:</h4>
          <ul className="list-disc list-inside">
            {favoritePokemonIds.map((id, index) => (
              <li key={index}>{id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BtnFavorito;
