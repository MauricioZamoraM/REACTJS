import { NavLink } from "react-router-dom";
import "./navbar.css";
//Este componente permite la navegacion dentro de la pagina, hay que llamarlo en la app principal.
//Este componente debe contener los enlaces.
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
