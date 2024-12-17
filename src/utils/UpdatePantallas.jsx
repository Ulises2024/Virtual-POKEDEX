import PokemonLocations from "../components/PokemonLocations/PokemonLocations";
import PokeHabilidad from "../components/PokeHabilidad/PokeHabilidad";
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
  // Configura pantalla1Content
  setPantalla1Content(
    <div className="text-center pant1_img">
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
            style={{ minWidth: "fit-content" }}
          >
            <img src={typeInfo.icon} alt={`${tipo.type.name} icon`} className="w-5 h-5" />
            <span className="font-bold">{tipo.type.name.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );

  // Configura pantalla2Content
  setPantalla2Content(
    <div>
      <h3 className="title_text-md">Estadísticas:</h3>
      <hr />
      <br />
      <div>
        <p><strong>Altura:</strong> {data.height / 10} m</p>
        <p><strong>Peso:</strong> {data.weight / 10} kg</p>
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

  // Configura pantalla3Content

  if (data.name && data.id) {
    setPantalla3Content(
      <div className="p-2">
        <PokeHabilidad abilityIdOrName={data.id} />
      </div>
    );
  }


  // Configura pantalla4aContent y pantalla4bContent si data.name y data.id existen
  if (data.name && data.id) {
    setPantalla4aContent(
      <div className="p-2">
        <PokeHabilidad abilityIdOrName={data.id} />
      </div>
    );

    setPantalla4bContent(
      <div className="p-4">
        <h5 className="text-sm text-white text-center mb-4">Ubicaciones del Pokémon</h5>
        <PokemonLocations pokemonId={data.id} />
      </div>
    );
  }
};
