import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header() {
  const { currentUser, isLoggedIn, handleLogout } =
    useContext(CurrentUserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo-badge">
          <img src="/favicon.png" alt="SGAT" className="header__logo-image" />
        </div>
        <div>
          <div className="header__logo">SGAT</div>
          <span className="header__subtitle">Gestión de Activos TI</span>
        </div>
      </div>

      {!isLoggedIn ? (
        <Link to="/login" className="header__login">
          Iniciar sesión
        </Link>
      ) : (
        <div className="header__profile-wrapper">
          <button
            type="button"
            className="header__profile"
            onClick={handleToggleMenu}
          >
            <div className="header__avatar">
              {getInitials(currentUser?.name)}
            </div>

            <div className="header__profile-info">
              <p className="header__user">{currentUser?.name}</p>
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

              <button
                type="button"
                className="header__menu-link header__menu-link_logout"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
