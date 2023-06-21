import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

console.log(domain)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin} //Una vez logueado hacia donde lo voy a redireccionar, hacia la ruta en la que se encontraba antes 
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
