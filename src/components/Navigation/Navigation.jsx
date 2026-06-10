import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Dashboard</Link>

      <Link to="/inventory">Inventario</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/register-equipment">Registrar Equipo</Link>
    </nav>
  );
}

export default Navigation;
