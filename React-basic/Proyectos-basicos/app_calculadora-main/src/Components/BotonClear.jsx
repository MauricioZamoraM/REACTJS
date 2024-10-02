
import React from "react";
import icon from '../Images/icon.png';
import './BotonClear.css';
const BotonClear=(props) =>(
<div className='boton-clear' onClick={props.manejarClear}>
  <img className="icon" src={icon} alt='logo'></img>
  {props.children}
</div>
);

    export default BotonClear;
    