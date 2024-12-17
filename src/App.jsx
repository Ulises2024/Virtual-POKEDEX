import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Buscar from "./components/Buscar/Buscar";
import './index.css';
import { colorByType } from "./constants/colotype";
import BtnVolver from "./components/Botones/VolverBuscar/BtnVolver";
import BtnSalir from "./components/Botones/SalirMenu/BtnSalir";  // Importa BtnSalir
import PokemonLocations from "./components/PokemonLocations/PokemonLocations";
import PokeHabilidad from "./components/PokeHabilidad/PokeHabilidad";
import BtnFavorito from "./components/Botones/Favoritos/BtnFavorito";

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
    // Configura pantalla1Content
    setPantalla1Content(
      <div className="text-center pant1_img ">
        <h2 className="text-2xl font-bold capitalize text-black nombre_img">{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} className="mx-auto" />
      </div>
    );

    // Configura pantallaTipoContent
    setPantallaTipoContent(
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

      // Verifica si ambas pantallas están activas después de establecer sus estados
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




    setPantalla2Content(
      
      <div>
        <h3 className="title_text-md ">Estadísticas:</h3>
        <hr /><br />
        <div className="">
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
      // Verifica si ambas pantallas están activas después de establecer sus estados
      if (data.name && data.id) {
        setPantalla3Content(
          <div className="p-2">
            <PokeHabilidad abilityIdOrName={data.id} />
          </div>
        );
        }

    setPantalla4aContent(
      <div>
        <h3 className="text-lg font-semibold">Habilidades:</h3>
        <ul className="list-disc list-inside">
          {data.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    )
    // Verifica si ambas pantallas están activas después de establecer sus estados
    if (data.name && data.id) {
      setPantalla3Content(
        <div className="p-2">
          <PokeHabilidad abilityIdOrName={data.id} />
        </div>
      );
      }
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



  const [pokemonData, setPokemonData] = useState(null);

  const [favoritos, setFavoritos] = useState([]);

  const agregarAFavoritos = (pokeId) => {
    if (!favoritos.includes(pokeId)) {
      setFavoritos([...favoritos, pokeId]);
    }
  };

  return (

    <main>
      <div className="relative min-h-screen">
  {/* <!-- Contenedor Principal --> */}
  <div className="flex flex-col md:flex-row h-full">
    {/* <!-- Columna Izquierda --> */}
    <div className="hidden md:block md:min-w-[50px] lg:min-w-[80px] p-2">
      <div className="h-full">Columna Izquierda</div>
    </div>
    {/* <!-- Columna Central --> */}
    <div className="pokedex flex-grow  md:bg-[url('./src/img/poke2.png')] md:bg-no-repeat md:bg-center md:bg-contain p-4">
      {/* <!-- Contenido ajustado a la plantilla --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
        {/* <!-- Fila 1 --> */}
        <div className="border p-2">Div 1
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
                  <BtnFavorito  
                    pokeId={pokemonData ? pokemonData.id : null} // ID del Pokémon
                    agregarAFavoritos={agregarAFavoritos}       // Callback para agregar
                  />




        </div>
        <div className="border p-2">Div 2</div>
        {/* <!-- Fila 2 --> */}
        <div className="border p-2">Div 3
          <div className="pantalla1">
            {pantalla1Content}
          </div>
          <div className="pantallaTipo flex items-center justify-center p-2 grid grid-cols-2">
            <div className="pant_tipo_hijo grid grid-rows-1">{pantallaTipoContent}</div>
          </div>
        </div>
        <div className="border p-2">Div 4
        <div className="pantalla2 flex items-center justify-center">{pantalla2Content}</div>
        </div>
        {/* <!-- Fila 3 --> */}
        <div className="pantalla3 border p-2">Div 5
        {pantalla3Content}
        </div>
        <div className="border  p-2 grid grid-cols-2" >Div 6
          <div className="pantalla4 grid grid-rows-1">
            <div className="ubicacion p-2">
              {pantalla4bContent && pantallaTipoContent ? (
                // Verificar si pantalla4bContent incluye el texto "No se encontraron ubicaciones"
                pantalla4bContent.props?.children?.props?.children === "No se encontraron ubicaciones." ? (
                  <img
                    src="./src/img/mapa_pregunta.png"
                    alt="mapa_buscar"
                    className="mapa"
                  />
                ) : (
                  <img
                    src="./src/img/mapa_poke.png"
                    alt="img_mapa"
                    className="mapa"
                  />
                )
              ) : null}
            </div>
            <div className="pant4_2">{pantalla4bContent}</div>
          </div>

        </div>
      </div>
    </div>
    {/* <!-- Columna Derecha --> */}
    <div className="hidden md:block md:min-w-[50px] lg:min-w-[80px] p-2">
      <div className="h-full">Columna Derecha</div>
    </div>
  </div>
</div>


    </main>





  );
};

export default App;
