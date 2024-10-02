
import './App.css';

import { useEffect, useRef, useState } from 'react';
function App() {
  //useRef permite hacer cambios de valores en las variables sin renderizar la pagina. 
  //Cambia los valores de las variables pero no lo que se pinta en pantalla ya que es necesario renderizar la aplicacion 
  //si queremos hacer cambios en pantalla utilizamos el useState.
  const nombre = useRef('Mauricio');
  let refMenuBtn = useRef();
  let refMenu = useRef();
  const cuentaRenderizado = useRef(0);
  const [name, setName] = useState('Mauricio')

  useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      //Este return evita que se ejecuten las lineas de codigo que están abajo como el console.log
      return
    }
    console.log(`Se ha cambiado el nombre correctamente, su nuevo nombre es: ${name}`)
  }, [name])

  const cambiarNombre = () => {
    nombre.current = 'Raudy';
    console.log(`El nuevo nombre es ${nombre.current}`);
    setName(nombre.current)
  }

  const handleToggleMenu = () => {

    if (refMenuBtn.current.texContent === "Menú") {
      refMenuBtn.current.texContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.texContent = "Menú";
      refMenu.current.style.display = "none";
    }
  }

  return (
    <div className="App">
      <h1>{name}</h1>

      <button className="cambio" onClick={cambiarNombre}>Cambiar Nombre</button>
      <br />
      <br />
      <hr />
      <br />
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <br />
      <br />
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href='#'>Sección 1</a>
        <br />
        <a href='#'>Sección 2</a>
        <br />
        <a href='#'>Sección 3</a>
        <br />
        <a href='#'>Sección 4</a>
        <br />
        <a href='#'>Sección 5</a>
      </nav>
    </div>
  );
}

export default App;
