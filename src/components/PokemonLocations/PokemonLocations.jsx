import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonLocations = ({ pokemonId }) => {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);

        // Obtener las ubicaciones del Pokémon desde encounters
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/encounters`
        );

        // Actualiza las ubicaciones con la respuesta de la API
        setLocations(response.data || []);
      } catch (err) {
        setError("No se pudo obtener la información de ubicaciones.");
      } finally {
        setLoading(false);
      }
    };

    if (pokemonId) fetchLocations();
  }, [pokemonId]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      {loading && <p className="text-gray-600">Cargando ubicaciones...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && locations.length > 0 && (
        <ul className="list-disc list-inside">
          {locations.map((location, index) => (
            <li key={index} className="text-gray-800 text-sm">
              {location.location_area.name.replace(/-/g, " ").toUpperCase()}
             </li>
          ))}
        </ul>
      )}
      {!loading && !error && locations.length === 0 && (
        <p className="text-gray-600">No se encontraron ubicaciones.</p>
      )}
    </div>
  );
};

export default PokemonLocations;
