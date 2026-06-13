import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaTimes } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./EditProfile.css";

const initialProfileData = {
  name: "Fernando Salvador",
  email: "fernando@sgat.com",
  department: "Sistemas",
  role: "Administrador SGAT",
};

function EditProfile() {
  const { showToast } = useContext(EquipmentContext);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(initialProfileData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    showToast("Perfil actualizado correctamente");
    navigate("/profile");
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <section className="edit-profile">
      <div className="edit-profile__hero">
        <span className="edit-profile__label">Cuenta de usuario</span>

        <h2 className="edit-profile__title">Editar Perfil</h2>

        <p className="edit-profile__subtitle">
          Actualiza la información principal del usuario administrador.
        </p>
      </div>

      <form className="edit-profile__form" onSubmit={handleSubmit}>
        <div className="edit-profile__section">
          <h3>Información personal</h3>

          <div className="edit-profile__grid">
            <label className="edit-profile__group">
              Nombre completo
              <input
                name="name"
                type="text"
                value={profileData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="edit-profile__group">
              Correo electrónico
              <input
                name="email"
                type="email"
                value={profileData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="edit-profile__group">
              Departamento
              <input
                name="department"
                type="text"
                value={profileData.department}
                onChange={handleChange}
                required
              />
            </label>

            <label className="edit-profile__group">
              Rol
              <input
                name="role"
                type="text"
                value={profileData.role}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>

        <div className="edit-profile__actions">
          <button
            type="button"
            className="edit-profile__cancel"
            onClick={handleCancel}
          >
            <FaTimes />
            Cancelar
          </button>

          <button type="submit" className="edit-profile__save">
            <FaSave />
            Guardar cambios
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
