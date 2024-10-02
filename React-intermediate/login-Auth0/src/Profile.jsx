import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// Este modulo permite mostrar la informacion de un json en la pagina de una forma mas legible
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  // Se obtiene la informacion del usuario cuando se loguea
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && ( // Si el usuario esta autenticado retornamos el div con la informacion
      <div>
        {/* Mostramos la imagen de perfil del usuario */}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />;
      </div>
    )
  );
};

export default Profile;
