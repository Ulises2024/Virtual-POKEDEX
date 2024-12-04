import React from "react";
import '../VolverBuscar/BtnVolver.css';

export default function BtnVolver({
  pantalla1Content,
  pantallaTipoContent,
  setPantalla1Content,
  setPantallaTipoContent,
  setPantalla2Content,
  setPantalla3Content,
  setPantalla4aContent,
  setPantalla4bContent,
  Buscar,
  updatePantallas,
}) {
  return (
    <div>
      {/* Renderizado del botón basado en la condición */}
      {pantalla1Content && pantallaTipoContent &&(
        <button
          className="btn btn_volverPoke bg-blue-500 text-white px-2 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
          onClick={() => {
            // Resetea las pantallas y carga el componente de búsqueda
            setPantalla1Content(
              <Buscar
                onPokemonFetched={(data) => {
                  updatePantallas(data); // Actualiza las pantallas con los datos del Pokémon
                }}
              />
            );
            setPantallaTipoContent(null);
            setPantalla2Content(null);
            setPantalla3Content(null);
            setPantalla4aContent(null);
            setPantalla4bContent(null);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
        </button>
      )}
    </div>
  );
}
