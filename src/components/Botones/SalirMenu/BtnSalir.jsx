import React from "react";
import "./BtnSalir.css";
import Menu from "../../Menu/Menu";

export default function BtnSalir({
  pantalla1Content,
  setPantalla1Content,
  setPantallaTipoContent,
  setPantalla2Content,
  setPantalla3Content,
  setPantalla4aContent,
  setPantalla4bContent,
  Buscar,
  handleMenuClick, // Prop recibida para manejar el menú
}) {
  // Verificamos si 'pantalla1Content' es el componente 'Buscar'
  const isBuscarVisible = pantalla1Content && pantalla1Content.type === Buscar;

  return (
    <div>
      {/* Solo mostrar el botón "Salir" si 'Buscar' está en pantalla1Content */}
      {isBuscarVisible && (
        <button
          className="btn btn_salir bg-red-700 text-white px-2 py-2 rounded shadow hover:bg-red-500 transition duration-300"
          onClick={() => {
            // Resetear las pantallas y regresar al menú
            setPantalla1Content(<Menu onOptionClick={handleMenuClick} />);
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
