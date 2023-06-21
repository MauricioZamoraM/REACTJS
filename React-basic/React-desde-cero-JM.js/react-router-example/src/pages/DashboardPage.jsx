import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
// Navegar usando una funcion y un evento.
  const handleClick = () => {
    navigate("/", {
      // replace: true,
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="welcome">Say Welcome</Link>
{/* Este es el sub componente de la sub ruta contiene lo indicado en app en la etiqueta element de la sub ruta welcome */}
      <Outlet />

      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
