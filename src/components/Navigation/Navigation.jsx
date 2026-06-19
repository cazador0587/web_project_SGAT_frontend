import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/inventory"
        className={({ isActive }) =>
          isActive
            ? "navigation__link navigation__link_active"
            : "navigation__link"
        }
      >
        Inventario
      </NavLink>
    </nav>
  );
}

export default Navigation;
