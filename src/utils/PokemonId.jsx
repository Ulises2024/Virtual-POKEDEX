import axios from "axios";

/**
 * Obtiene el ID de un Pokémon a partir de su nombre o ID ingresado.
 * @param {string} pokemonInput - Nombre o ID del Pokémon.
 * @returns {Promise<number>} - Retorna el ID del Pokémon si es válido.
 * @throws {Error} - Lanza un error si no se encuentra el Pokémon.
 */
export const getPokemonId = async (pokemonInput) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`
    );
    return response.data.id;
  } catch (error) {
    throw new Error("No se encontró el Pokémon ingresado.");
  }
};
