import React from "react";
import "../Componentes/hojas-de-estilo/boton.css";

function Boton ({texto, esBotonDeCLick, manejarClick}) {

    return (
       <button className={esBotonDeCLick ? "boton-click" : "boton-reinciar"}
       
       onClick={manejarClick}>
        {texto}
       </button>

);
}

export default Boton;