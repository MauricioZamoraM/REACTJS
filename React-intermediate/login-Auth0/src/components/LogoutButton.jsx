import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0(); // Al darle click salimos de la aplicacion
  return <button onClick={() => logout()}>logout</button>;
};

export default LogoutButton;
