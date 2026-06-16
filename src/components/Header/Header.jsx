import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo">SGAT</div>
        <span className="header__subtitle">Gestión de Activos TI</span>
      </div>

      <div className="header__profile-wrapper">
        <button
          type="button"
          className="header__profile"
          onClick={handleToggleMenu}
        >
          <div className="header__avatar">FS</div>

          <div className="header__profile-info">
            <p className="header__user">Fernando Salvador</p>
            <span className="header__role">Administrador</span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="header__menu">
            <Link
              to="/profile"
              className="header__menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Mi Perfil
            </Link>

            <Link
              to="/profile/edit"
              className="header__menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Editar Perfil
            </Link>

            <Link
              to="/login"
              className="header__menu-link header__menu-link_logout"
              onClick={() => setIsMenuOpen(false)}
            >
              Cerrar Sesión
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
