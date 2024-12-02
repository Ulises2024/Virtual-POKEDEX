import React, { useState } from "react";
import axios from "axios";

export default function Buscar({ onPokemonFetched }) {
  const [pokemonName, setPokemonName] = useState("");
  const [data, setData] = useState(null); // Declara un estado para "data"
  

  const buscarPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      onPokemonFetched(response.data);
      
    } catch (error) {
      console.error("Error al buscar el Pokémon:", error);
    }
  };

  return (
    <div className="text-center grid grid-cols-1 gap-4 w-full max-w-md mx-auto py-10">
      {/* Título */}
      <h1 className="text-2xl font-bold col-span-1">Buscar Pokémon</h1>

      {/* Input y botón en una fila de dos columnas */}
      <div className="grid grid-cols-12 items-center  m-3">
        {/* Input */}
        <input
          type="text"
          placeholder="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="col-span-10 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Botón con SVG */}
        <button
          onClick={buscarPokemon}
          className="col-span-2 bg-blue-500 text-white p-2.5 rounded flex items-center justify-center hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </div>
    </div>

  );
}
