import "./App.css";
import Boton from "./Componentes/Boton";
import Contador from "./Componentes/Contador";
import { useState } from "react";
import logo from "./Logo/logo-pi-bl.png";


function App() {

  const [numClics,setNumClics]=useState(0);

  const manejarClick = () => {
    setNumClics(numClics+1)
  }

  const reiniciar = () => {
    setNumClics(0)
  }
  
  return <div className="App">

    <div className="contenedorlogo">
      <img 
        src={logo} 
        className="logo"
        alt="Imagen logo" />
    </div>

    <div className="contenedor">

        <Contador numClics={numClics}/>

      <div className="boton">
        <Boton 
          texto="Clic"
          esBotonDeClick={true}
          manejarClick={manejarClick}/>

        <Boton 
         texto="Reiniciar"
         esBotonDeClick={false}
         manejarClick={reiniciar}/> 
      </div>
        
    </div>

  </div>;
}

export default App;
