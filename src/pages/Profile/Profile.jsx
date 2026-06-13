import { Link } from "react-router-dom";
import { useContext } from "react";
import EquipmentContext from "../../contexts/EquipmentContext";
import {
  FaEnvelope,
  FaBuilding,
  FaClock,
  FaUserShield,
  FaLaptop,
  FaSignOutAlt,
  FaEdit,
  FaIdBadge,
} from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const { showToast } = useContext(EquipmentContext);

  return (
    <section className="profile">
      <div className="profile__layout">
        <aside className="profile__sidebar">
          <div className="profile__avatar">FS</div>

          <span className="profile__status">Activo</span>

          <div className="profile__sidebar-info">
            <FaIdBadge />
            <div>
              <span>ID de usuario</span>
              <p>SGAT-ADM-001</p>
            </div>
          </div>
        </aside>

        <div className="profile__content">
          <div className="profile__header">
            <div>
              <p className="profile__label">Perfil de usuario</p>

              <h2 className="profile__name">Fernando Salvador</h2>

              <p className="profile__role">Administrador SGAT</p>
            </div>

            <Link className="profile__edit" to="/profile/edit">
              <FaEdit />
              Editar Perfil
            </Link>
          </div>

          <div className="profile__stats">
            <div className="profile__stat-card">
              <FaLaptop />
              <div>
                <h3>12</h3>
                <p>Equipos asignados</p>
              </div>
            </div>

            <div className="profile__stat-card">
              <FaUserShield />
              <div>
                <h3>Admin</h3>
                <p>Nivel de acceso</p>
              </div>
            </div>
          </div>

          <div className="profile__info">
            <div className="profile__row">
              <FaEnvelope />
              <div>
                <span>Correo electrónico</span>
                <p>fernando@sgat.com</p>
              </div>
            </div>

            <div className="profile__row">
              <FaBuilding />
              <div>
                <span>Departamento</span>
                <p>Sistemas</p>
              </div>
            </div>

            <div className="profile__row">
              <FaClock />
              <div>
                <span>Último acceso</span>
                <p>09/06/2026</p>
              </div>
            </div>
          </div>

          <div className="profile__actions">
            <button
              className="profile__logout"
              onClick={() => showToast("Sesión cerrada correctamente")}
            >
              <FaSignOutAlt />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
