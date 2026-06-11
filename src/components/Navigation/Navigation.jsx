import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Inventario</Link>
      <Link to="/register-equipment">Registrar Equipo</Link>
    </nav>
  );
}

export default Navigation;
