import React from 'react';
import './App.css';
import ListaDeTareas from './Components/ListaDeTareas';
import logo from './Images/card-checklist.svg';

function App() {
  return (
    <div className='container'>
 <div className='aplicacion-tareas'>
     
     <div className='tareas-lista-principal'>
       <div className='header'>
       <h1>Mis Tareas</h1>
       <img src={logo} alt='logo'></img>
       </div>
       <ListaDeTareas />
     </div>
   </div>
    </div>
   
  );
}

export default App;