import React, { useEffect, useState } from "react";

function PokemonInfo({ data, submenu, onSubmenuChange }) {
  const [pantalla2Content, setPantalla2Content] = useState(null);

  useEffect(() => {
    if (!data) return; // Salir si "data" es null o undefined
  
    if (pantalla2Submenu === "estadisticas") {
      setPantalla2Content(
        <div>
          <h3 className="title text-lg font-semibold">Estadísticas:</h3>
          <ul>
            {data.stats.map((stat) => (
              <li key={stat.stat.name}>
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (pantalla2Submenu === "avistamientos") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}/encounters`)
        .then((response) => response.json())
        .then((locations) => {
          if (locations.length > 0) {
            setPantalla2Content(
              <div>
                <h3 className="title text-lg font-semibold">Avistamientos:</h3>
                <ul>
                  {locations.map((location, index) => (
                    <li key={index}>
                      <strong>Área:</strong> {location.location_area.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            setPantalla2Content(
              <div>
                <h3 className="title text-lg font-semibold">Avistamientos:</h3>
                <p>No se encontraron áreas de avistamiento para este Pokémon.</p>
              </div>
            );
          }
        })
        .catch((error) => console.error("Error al obtener los avistamientos:", error));
    }
  }, [pantalla2Submenu, data]);

  return (
    <div>
      <div className="flex justify-around my-4">
        <button
          onClick={() => onSubmenuChange("estadisticas")}
          className={`px-4 py-2 rounded ${
            submenu === "estadisticas" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Estadísticas
        </button>
        <button
          onClick={() => onSubmenuChange("avistamientos")}
          className={`px-4 py-2 rounded ${
            submenu === "avistamientos" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Avistamientos
        </button>
      </div>
      {pantalla2Content}
    </div>
  );
}

export default PokemonInfo;
