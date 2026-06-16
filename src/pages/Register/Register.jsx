import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus, FaDesktop } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import mainApi from "../../utils/MainApi";
import "./Register.css";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const { showToast } = useContext(EquipmentContext);

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    mainApi
      .signup(formData)
      .then(() => {
        showToast("Usuario registrado correctamente");
        setFormData(initialFormData);
        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error || "No se pudo registrar el usuario");
      });
  };

  const isFormValid = formData.name && formData.email && formData.password;

  return (
    <section className="register">
      <div className="register__container">
        <div className="register__info">
          <div className="register__brand">
            <FaDesktop className="register__brand-icon" />

            <div>
              <h1>SGAT</h1>
              <p>Sistema de Gestión de Activos Tecnológicos</p>
            </div>
          </div>

          <div className="register__message">
            <h2>Crear una cuenta</h2>
            <p>
              Registra un usuario para acceder al sistema y gestionar activos
              tecnológicos de forma segura.
            </p>
          </div>
        </div>

        <div className="register__form-panel">
          <div className="register__icon">
            <FaUserPlus />
          </div>

          <h2 className="register__title">Registro de usuario</h2>

          <p className="register__subtitle">
            Completa los datos para crear una cuenta de acceso
          </p>

          <form className="register__form" onSubmit={handleSubmit}>
            <label className="register__group">
              Nombre
              <input
                name="name"
                type="text"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                required
              />
            </label>

            <label className="register__group">
              Correo electrónico
              <input
                name="email"
                type="email"
                placeholder="usuario@empresa.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register__group">
              Contraseña
              <input
                name="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            {errorMessage && <p className="register__error">{errorMessage}</p>}

            <button
              type="submit"
              className="register__button"
              disabled={!isFormValid}
            >
              Crear cuenta
            </button>

            <p className="register__login-note">
              ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
