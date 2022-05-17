import './App.css';
import evoClick from './img/evo-click.jpg';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
    console.log('Click');
  };

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log('Reiniciar');
  };

  return (
    <div className = 'App'>
      <div className = 'freecodecamp-logo-contenedor'>
        <img
          className = 'freecodecamp-logo'
          src = { evoClick }
          alt = 'Logo freeCodeCamp' />
      </div>
      <div className = 'contenedor-principal'>
        <Contador numClicks = {numClicks} />
        <Boton 
          texto = 'Click'
          botonDeClick = { true } 
          manejarClick = { manejarClick } />
        <Boton
          texto = 'Reiniciar'
          botonDeClick = { false }
          manejarClick = { reiniciarContador } />
      </div>
    </div>
  );
}

export default App;

