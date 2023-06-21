import React, { useState } from 'react';
import './TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');
/* Esta funcion va a permitir obtener el valor nuevo que ingresó el usuario y lo va a pasar al setInput
para posteriormente pasarse al input y mostrarse como una nueva tarea en el nuevo contenedor*/
  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    /* Esta linea de codigo nos permite que no se vuelva a cargar toda la aplicacion cuando enviamos el formulario  */
    e.preventDefault();
    /* Enviamos la nueva tarea como un formulario */
    const tareaNueva = {
      /* Este paquete uuid nos permite crear identificadores unicos hay que instalarlo con este comando npm install uuid importacion:import { v4 as uuidv4 } from 'uuid'; */
     /* Con esta linea de codigo asignamos un id único a cada tarea */
      id: uuidv4(),
      texto: input,
      /*Luego se puede actualizar este valor */
      completada: false
    }
/* Cuando se envie el formulario (eso quiere decir el evento onSubmit)enviamos la tarea nueva mediate un props */
    props.onSubmit(tareaNueva);
    /*Esta nueva tarea se va a enviar a la lista de tareas */
  }

  return (
    /* Este formulario es el que aparece arriba que nos permite ingresar la tarea */
    <form 
      className='tarea-formulario'
      /*Cuando se intente enviar se va a mandar a llamar la funcion manejarEnvio */
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        /* Permite que aparezca un texto momentaneo en el input */
        placeholder='Escribe una Tarea'
        name='texto'
        /* cada vez que se realize un cambio en el input se va a llamar a la funcion manejar cambio*/
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;


