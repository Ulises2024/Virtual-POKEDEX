import React from "react";
import PokemonLocations from "../components/PokemonLocations/PokemonLocations";
import PokeHabilidad from "../components/PokeHabilidad/PokeHabilidad";

// Objeto para colores e íconos según tipo
import { colorByType } from "../constants/colotype";

export const updatePantallas = (
    data,
    setPantalla1Content,
    setPantallaTipoContent,
    setPantalla2Content,
    setPantalla3Content,
    setPantalla4aContent,
    setPantalla4bContent
  ) => {
    // Configura pantalla 1
    setPantalla1Content(
      <div className="text-center pant1_img">
        <h2 className="text-2xl font-bold capitalize text-black nombre_img">
          {data.name}
        </h2>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="mx-auto"
        />
      </div>
    );
  
    // Configura pantalla de tipos
    setPantallaTipoContent(
      <div className="flex gap-2">
        {data.types.map((tipo, index) => {
          const typeInfo = colorByType[tipo.type.name];
          return (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm ${typeInfo.bg}`}
              style={{ minWidth: "fit-content" }}
            >
              <img
                src={typeInfo.icon}
                alt={`${tipo.type.name} icon`}
                className="w-5 h-5"
              />
              <span className="font-bold">{tipo.type.name.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    );
  
    // Configura pantalla de estadísticas
    setPantalla2Content(
      <div>
        <h3 className="title_text-md">Estadísticas:</h3>
        <hr />
        <br />
        <div>
          <p>
            <strong>Altura:</strong> {data.height / 10} m
          </p>
          <p>
            <strong>Peso:</strong> {data.weight / 10} kg
          </p>
        </div>
        <br />
        <ul>
          {data.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    );
  
    // Configura pantalla de habilidades
    setPantalla3Content(
      <div className="p-2">
        <PokeHabilidad abilityIdOrName={data.id} />
      </div>
    );
  
    // Configura pantalla 4a: Lista de habilidades
    setPantalla4aContent(
      <div>
        <h3 className="text-lg font-semibold">Habilidades:</h3>
        <ul className="list-disc list-inside">
          {data.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  
    // Configura pantalla 4b: Ubicaciones
    if (data.name && data.id) {
      setPantalla4bContent(
        <div className="p-4">
          <h5 className="text-sm text-white text-center mb-4">
            Ubicaciones del Pokémon
          </h5>
          <PokemonLocations pokemonId={data.id} />
        </div>
      );
    }
  };