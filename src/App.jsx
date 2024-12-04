import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Buscar from "./components/Buscar/Buscar";
import Estadistica from "./components/Estadistica/Estadist";
import './index.css';
import { colorByType } from "./constants/colotype";
import BtnVolver from "./components/Botones/VolverBuscar/BtnVolver";
import BtnSalir from "./components/Botones/SalirMenu/BtnSalir";  // Importa BtnSalir

const App = () => {
  const handleMenuClick = (option) => {
    switch (option) {
      case 1:
        setPantalla1Content(
          <Buscar
            onPokemonFetched={(data) => {
              updatePantallas(data);
            }}
          />
        );
        break;
      default:
        setPantalla1Content(<Menu onOptionClick={handleMenuClick} />);
        resetPantallas();
    }
  };

  const updatePantallas = (data) => {
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
    setPantallaTipoContent(null);
    setPantalla2Content(null);
    setPantalla3Content(null);
    setPantalla4aContent(null);
    setPantalla4bContent(null);
  };

  const salirAMenuInicio = () => {
    setPantalla1Content(<Menu onOptionClick={handleMenuClick} />); // Renderiza el menú inicial
    setPantallaTipoContent(null);
    setPantalla2Content(null);
    setPantalla3Content(null);
    setPantalla4aContent(null);
    setPantalla4bContent(null);
  };


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
                  {/* Botón salir */}
                  <BtnSalir
                    pantalla1Content={pantalla1Content}
                    setPantalla1Content={setPantalla1Content}
                    setPantallaTipoContent={setPantallaTipoContent}
                    setPantalla2Content={setPantalla2Content}
                    setPantalla3Content={setPantalla3Content}
                    setPantalla4aContent={setPantalla4aContent}
                    setPantalla4bContent={setPantalla4bContent}
                    Buscar={Buscar}
                    handleMenuClick={handleMenuClick} // Pasar la función handleMenuClick
                  />
                  {/* Renderizar Vlver a buscar pokemon */}
                  <BtnVolver
                    pantalla1Content={pantalla1Content}
                    pantallaTipoContent={pantallaTipoContent}
                    setPantalla1Content={setPantalla1Content}
                    setPantallaTipoContent={setPantallaTipoContent}
                    setPantalla2Content={setPantalla2Content}
                    setPantalla3Content={setPantalla3Content}
                    setPantalla4aContent={setPantalla4aContent}
                    setPantalla4bContent={setPantalla4bContent}
                    Buscar={Buscar}
                    updatePantallas={updatePantallas}
                  />
                  
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
