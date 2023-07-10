import React from "react";
import "../Componentes/hojas-de-estilo/boton.css";
import "../Componentes/hojas-de-estilo/contador.css";

function Boton ({texto, esBotonDeCLick, manejarClick}) {

    return (
     
       <button 
       className={esBotonDeCLick ? "boton-reiniciar" : "boton-click"}
       
       onClick={manejarClick}>
        
        {texto}
       </button>

    

);
}

export default Boton;



