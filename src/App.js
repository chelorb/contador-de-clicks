
import './App.css';
import freeCodeCampLogo from "../src/Imagenes/freecodecamp-logo.png"
import Boton from './Componentes/boton';
import Contador from './Componentes/contador';

function App() {

const manejarClick = () => {

console.log("Click");

}

const reiniciarContador = () => {

  console.log("Reiniciar");
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

        <Contador numClicks="5" />

      <Boton
      
      texto= "click"
      esBotonDeClick={true}
      manejarClick={manejarClick}
        />

      <Boton
      texto="Reiniciar"
      esBotonDeCLick={false}
      manejarClick={reiniciarContador}/>

      </div>
      
    </div>
  );
}

export default App;
