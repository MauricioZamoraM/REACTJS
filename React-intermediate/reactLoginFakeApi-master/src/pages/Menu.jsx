import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function Menu() {

  const cerrarSesion = () => { // Eliminamos las variables de sesion y nos redirigimos a iniciar sesion nuevamente
    cookies.remove('id', { path: "/" });
    cookies.remove('apellido_paterno', { path: "/" });
    cookies.remove('apellido_materno', { path: "/" });
    cookies.remove('nombre', { path: "/" });
    cookies.remove('username', { path: "/" });
    window.location.href = './';
  }

  useEffect(() => {
    if (!cookies.get('username')) {
      window.location.href = "./"; // si no existe la cookie que lo redirija al login
    }
    console.log('id: ' + cookies.get('id'));
    console.log('apellido_paterno: ' + cookies.get('apellido_paterno'));
    console.log('apellido_materno: ' + cookies.get('apellido_materno'));
    console.log('nombre: ' + cookies.get('nombre'));
    console.log('username: ' + cookies.get('username'));
  }, []);
  return (
    <div>
      Menu Principal
      <br />
      <button onClick={() => cerrarSesion()}>Cerrar Sesión</button>
    </div>
  );
}

export default Menu;