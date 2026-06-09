import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Dashboard</Link>

      <Link to="/inventory">Inventario</Link>
    </nav>
  );
}

export default Navigation;
