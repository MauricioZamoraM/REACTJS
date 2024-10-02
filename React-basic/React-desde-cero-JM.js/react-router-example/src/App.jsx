import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './app.css'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    //Router es el elemento que envuelve toda la aplicacion para indicar que se va a trabajar con rutas.
    <Router>
      {/* Componente que permite la navegacion dentro de la pagina web */}
      <Navbar />
      {/*Routes se utiliza como contenedor de las rutas*/}
      <Routes>
        {/*Con Route indicamos la ruta a la que nos queremos dirigir con el path y con el element indicamos que componente queremos que se renderize en dicha ruta */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* Navigate navega hacia la ruta que indiquemos, funciona como cuando queremos cerrar sesion y ya expiro y queremos redireccionar a inicio */}
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        {/* Los 2 puntos indica que el id es un parametro y no importa cual sea su valor, que se muestre en componente UserPage */}
        <Route path="/users/:id" element={<UserPage />} />
        {/* El * en este caso indica que va a tener componentes hijo y todos van a renderizar el mismo componente */}
        <Route path="/dashboard/*" element={<DashboardPage />}> 
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        {/* Esta ruta indica que para el resto de rutas que se busque muestre la pagina not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
