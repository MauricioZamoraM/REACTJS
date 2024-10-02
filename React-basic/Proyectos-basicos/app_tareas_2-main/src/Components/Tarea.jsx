import React from 'react';
import './Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    /* Contenedor de la tarea */
      /* Es el contenedor morado que aparece al guardar la tarea ingresada */
      /* Tarea contenedor completada es un estilo en css del contenedor,
      en caso que la tarea sea completada se establecerá el estilo tarea contenedor completada,
      en caso de no serlo se establecerá el estilo tarea-contenedor */
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
      /* Es el contenedor del texto que está en el contenedor morado que aparece al guardar la tarea ingresada */
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );    
}

export default Tarea;