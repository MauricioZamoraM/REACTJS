import React from 'react';
import './App.css';
import logo from './Images/logo.png';
import Boton from './Components/Boton';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState(' ');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    /* Si el input esta vacio va aser falso, por lo tanto no se va a ejecutar la linea de código */
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };
  return (
    <div className="App">

      <div className='header'>
        <div className='title'>
          <h1 className='calculadora'>Calculadora</h1>
          <h1 className='interactiva'>Interactiva</h1>
        </div>

        <div className='container-logo'>
          <img
            className='logo'
            src={logo} alt='logo'/>
        </div>

      </div>



      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
          </BotonClear>
          <Boton manejarClic={() => setInput('')}>C</Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
        </div>

      </div>
    </div>
  );
}

export default App;
