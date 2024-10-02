import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) { // Si esta cargando mostramos el loader
    return <h1>Is Loading</h1>
  }
  return (
    <div className="App"> {/* Si esta autenticado mostrados el boton LogoutButton, sino LoginButton */}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
 