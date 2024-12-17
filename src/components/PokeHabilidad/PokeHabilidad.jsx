import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeHabilidad = ({ abilityIdOrName }) => {
  const [abilities, setAbilities] = useState([]);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const [effect, setEffect] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        setLoading(true);
        setError(null);

        // Obtener las habilidades del Pokémon
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${abilityIdOrName}/`
        );

        setAbilities(response.data.abilities);
      } catch (err) {
        setError("No se pudieron obtener las habilidades del Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    if (abilityIdOrName) fetchAbilities();
  }, [abilityIdOrName]);

  const fetchAbilityEffect = async (abilityUrl) => {
    try {
      setLoading(true);
      setError(null);

      // Obtener la información de la habilidad
      const response = await axios.get(abilityUrl);

      // Filtrar para obtener el efecto en inglés
      const effectEntry = response.data.effect_entries.find(
        (entry) => entry.language.name === "en"
      );

      setEffect(effectEntry ? effectEntry.effect : "No se encontró información.");
      setModalVisible(true); // Mostrar el modal
    } catch (err) {
      setError("No se pudo obtener la información de la habilidad.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedAbility(null);
    setEffect("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h5 className="text-sm text-black font-bold text-center mb-4">
        Habilidades del Pokémon
      </h5>
      {loading && <p className="text-yellow-600">Cargando habilidades...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
       <div className="flex flex-wrap gap-2 justify-center">
       {abilities.map((abilityObj, index) => (
         <button
           key={index}
           className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
           onClick={() => {
             setSelectedAbility(abilityObj.ability.name);
             fetchAbilityEffect(abilityObj.ability.url);
           }}
         >
           {abilityObj.ability.name}
         </button>
       ))}
     </div>
     
      )}

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-black text-xl font-bold mb-4">{selectedAbility}</h2>
            {loading ? (
              <p className="text-blue-600">Cargando información...</p>
            ) : (
              <p className="text-blue-800">{effect}</p>
            )}
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeHabilidad;
