import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tarea.jsx';
import './ListaDeTareas.css';

function ListaDeTareas() {

  /* Usando los estados de react, los hook.
  Se crea un array de tareas y una funcion para actualizar el estado del array llamado setTareas y por ultimo se define el estado inicial*/
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    /* Trim nos quita los espacion en blanco al principio y al final */
    /* Verificamos que la tarea no este vacia  con trim(en blanco) */
    /* si el texto de la tarea no tiene espacion en blanco al principio y al final */
    if (tarea.texto.trim()) {
          /* Luego reasignamos el valor para evitar espacios en blanco */
      tarea.texto = tarea.texto.trim();
      /* Generamos un arreglo con todas las tareas anteriores y la tarea nueva, los ... sirve para acceder a todas las tareas anteriores */
      const tareasActualizadas = [tarea, ...tareas];
          /* por ultimo actualizamos las tareas */
      setTareas(tareasActualizadas);
    }
  }
/* Creamos la funcion para eliminar tarea y tomamos el id para eliminar la tarea que seleccionemos específicamente */
/* Esta funcion se llamará cuando se precione al boton de eliminar */ 
const eliminarTarea = id => {
    /* filtramos el arreglo de las tareas con le metodo filter */
    /* Estamos filtrando la tarea que cumpla la condicion se agrega al arreglo, pero si el id es igual no se va a incluir, estamos generando una copia nueva */
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    /* Ahora si vamos a alterar el arreglo llamamos a setTareas, ya generamos la lista filtrada */
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      /* Vamos a verificar si la tarea ya fue completada o no */
      /* Si ya fue completada se marca y si no ha sido completada la marcamos al precionar sobre ella */
      if (tarea.id === id) {
        /* Si se cumple la condicion se va a actualizar el estado */
        /* si el valor era falso pasa a verdadero y viceversa  ya que tareas.completada es un bolean*/
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    /* Actualizamos la nueva lista de tareas */
    setTareas(tareasActualizadas);
  }
  
  return (
    /*Fracmentos de react, se utilizan cuando no se necesita un contenedor */
    <>
    {/* Mostramos el formulario de la lista de tareas y pasamos por parametro agregarTarea */}
     {/* Cuando se envia el formulario mandamos a llamar a la funcion agregartarea */}
    
      <TareaFormulario onSubmit={agregarTarea} />
      {/* Este contenedor va a tener la lista de tareas que se vallan agregando*/}
      <div className='tareas-lista-contenedor'>
        {
          /* Map es un metodo que va a tomar cada una de esas tareas, las va a pasar una por una
          como el argumento para otra fucion y va a realizar lo que nosotros especifiquemos con esa tarea */
          tareas.map((tarea) =>
          /* Describimos todo lo que va a tener cada una de las tareas */
            <Tarea
            /* Se le debe agregar una key a cada tarea y tiene que ser un valor unico como el id */
              key={tarea.id}
               /* Le determinamos los valores de los props */
              /* Determinamos el id para identifcar la tarea de forma única */
              id={tarea.id} 
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          ) 
        }
      </div>
    </>
  );    
}

export default ListaDeTareas;