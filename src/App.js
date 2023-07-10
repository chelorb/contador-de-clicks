
import './App.css';
import freeCodeCampLogo from "../src/Imagenes/freecodecamp-logo.png"
import Boton from './Componentes/boton';
import Contador from './Componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

const manejarClick = () => {

setNumClicks(numClicks + 1);

}

const reiniciarContador = () => {

 setNumClicks(0);
}

  return (
    <div className="App">

      <div className="freecodecamp-logo-contenedor">
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt="Logo de FreeCodeCamp"
               
        />
      </div >
      <div className="contenedor-principal">

        <Contador numClicks={numClicks} />

      <Boton
      
      texto= "click"
      esBotonDeClick={false}
      manejarClick= {manejarClick}
        />

      <Boton

      texto="Reiniciar"
      esBotonDeCLick={true}
      manejarClick={reiniciarContador}/>

      </div>
      
    </div>
  );
}

export default App;
