import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Buscar from "./components/Buscar/Buscar";
import Estadistica from "./components/Estadistica/Estadist"
import './index.css';
import { colorByType } from "./constants/colotype";


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
        <h2 className="text-2xl font-bold capitalize text-black nombre_img">{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} className="mx-auto" />
      </div>
    );

    setPantallaTipoContent(
      <div className="flex gap-2">
        {data.types.map((tipo, index) => {
          const typeInfo = colorByType[tipo.type.name];
          return (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white  text-sm ${typeInfo.bg}`}
              style={{ minWidth: 'fit-content' }}
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
      <div className="text-center font-semibold">
        <p>
          <strong>Altura:</strong> {data.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {data.weight / 10} kg
        </p>
      </div>
      
    );

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

    setPantalla4bContent(
      <div className="flex gap-2">
        {data.types.map((tipo, index) => {
          const typeInfo = colorByType[tipo.type.name];
          return (
            <div
              key={index}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm ${typeInfo.bg}`}
              style={{ minWidth: 'fit-content' }}
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
  };

  const resetPantallas = () => {
    // Limpia todas las pantallas excepto la principal
    setPantallaTipoContent(null);
    setPantalla2Content(null);
    setPantalla3Content(null);
    setPantalla4aContent(null);
    setPantalla4bContent(null);
  };

  // Estados para cada pantalla
  const [pantalla1Content, setPantalla1Content] = useState(<Menu onOptionClick={handleMenuClick} />);
  const [pantallaTipoContent, setPantallaTipoContent] = useState(null);
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
                src="./src/img/poke2.png"
                alt="img_pkdx"
                className="pokedex"
              />
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2">
                
                <div className="pant1Container grid grid-rows-1 gap-0">
                  {/* Botón para elegir un nuevo Pokémon */}
                  {/* Renderizado del botón basado en la condición */}
                  {pantalla1Content && pantallaTipoContent && (
                    <button
                      className="btn btn_volverPoke bg-blue-500 text-white px-2 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
                      onClick={() => {
                        setPantalla1Content(
                          <Buscar
                            onPokemonFetched={(data) => {
                              updatePantallas(data); // Actualiza las pantallas con los datos del Pokémon
                            }}
                          />
                        );
                        // Resetear otras pantallas después de asignar nuevo contenido
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 14l-4 -4l4 -4" />
                        <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                      </svg>
                    </button>
                  )}


                  <div className="pantalla1 flex items-center justify-center">
                    {pantalla1Content}
                  </div>
                  <div className="pantallaTipo flex items-center justify-center p-2 grid grid-cols-2">
                    <div className="pant_tipo_hijo grid grid-rows-1">{pantallaTipoContent}</div>
                  </div>
                </div>
                <div className="pantalla2">{pantalla2Content}</div>
                <div className="pantalla3">{pantalla3Content}</div>
                <div className="pantalla4">
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
