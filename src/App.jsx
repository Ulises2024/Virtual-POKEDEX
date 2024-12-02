import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Buscar from "./components/Buscar/Buscar";
import './index.css';


const App = () => {
  // Definir funciones antes de los estados
  const handleMenuClick = (option) => {
    switch (option) {
      case 1:
        // Mostrar el componente de búsqueda y manejar los datos
        setPantalla1Content(
          <Buscar
            onPokemonFetched={(data) => {
              updatePantallas(data); // Actualiza las pantallas con los datos del Pokémon
            }}
          />
        );
        break;
      default:
        setPantalla1Content(<Menu onOptionClick={handleMenuClick} />);
        resetPantallas(); // Limpia las pantallas al volver al menú
    }
  };

  const updatePantallas = (data) => {
    // Actualizar el contenido en cada pantalla basado en los datos obtenidos
    setPantalla1Content(
      <div className="text-center pant1_img ">
        <h2 className="text-2xl font-bold capitalize nombre_img">{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} className="mx-auto" />
      </div>
    );

    setPantalla2Content(
      <div>
        <h3 className="title_text-lg font-semibold">Estadísticas:</h3>
        <ul>
          {data.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    );

    setPantalla3Content(
      <div>
        <h3 className="text-lg font-semibold">Habilidades:</h3>
        <ul className="list-disc list-inside">
          {data.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    );

    setPantalla4aContent(
      <div>
        <p>
          <strong>Altura:</strong> {data.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {data.weight / 10} kg
        </p>
      </div>
    );

    setPantalla4bContent(
      <div>
        <h3 className="text-lg font-semibold">Tipos:</h3>
        <ul>
          {data.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const resetPantallas = () => {
    // Limpia todas las pantallas excepto la principal
    setPantalla2Content(null);
    setPantalla3Content(null);
    setPantalla4aContent(null);
    setPantalla4bContent(null);
  };

  // Estados para cada pantalla
  const [pantalla1Content, setPantalla1Content] = useState(<Menu onOptionClick={handleMenuClick} />);
  const [pantalla2Content, setPantalla2Content] = useState(null);
  const [pantalla3Content, setPantalla3Content] = useState(null);
  const [pantalla4aContent, setPantalla4aContent] = useState(null);
  const [pantalla4bContent, setPantalla4bContent] = useState(null);

  return (
    <section>
      <main className="m-4 max-w-screen-lg mx-auto">
        <div className="cuerpo grid">
          <div className="col_izq"></div>
          <div className="col_central">
            <div className="relative p-4 flex justify-center">
              <img
                src="./src/img/pokedex.png"
                alt="img_pkdx"
                className="pokedex"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-2">
                
                <div className="pantalla1">{pantalla1Content}</div>
                <div className="pantalla2">{pantalla2Content}</div>
                <div className="pantalla3">{pantalla3Content}</div>
                <div className="pantalla4"> <label className="etiqueta_tipo bg-white-400 ">Tipo: </label>
                <div className="pant4_1">{pantalla4aContent}</div>
                <div className="pant4_2">{pantalla4bContent}</div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col_der"></div>
        </div>
      </main>
    </section>
  );
};

export default App;
