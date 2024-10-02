import React from "react";
import './Boton.css';
function Boton(props){

    const esOperador = valor=>{
        /*Si el valor no es un numero.....retornamos true */
        /*Si no se cumplen las condiciones retorna false */
        return isNaN(valor) && (valor !=='.');
    }
    return(
        /* Si el valor retornado por esta funcion es true se va a remplazar por la segunda clase asignada operador */
        /* Si el valor retornado por esta funcion es false se va a remplazar por vacio que es igual a null */
<div className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
/* Transformo los datos pasados por parametros como una funcion para evitar errores de compilación */
/* props.children tiene el valor de los botones de la calculadora */
/* Estamos llamado a otra funcion desde el evento Onclick */
onClick={()=>props.manejarClic(props.children)}>

    {props.children}
</div>

    );
}

export default Boton;