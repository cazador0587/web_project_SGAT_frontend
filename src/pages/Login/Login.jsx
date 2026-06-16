import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUserShield, FaChartBar, FaDesktop } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./Login.css";

function Login({ onLogin }) {
  const { showToast } = useContext(EquipmentContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    onLogin(formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error || "No se pudo iniciar sesión");
      });
  };

  const handleForgotPassword = () => {
    showToast("Función de recuperación de contraseña próximamente");
  };

  const isFormValid = formData.email && formData.password;

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__info">
          <div className="login__brand">
            <FaDesktop className="login__brand-icon" />

            <div>
              <h1>SGAT</h1>
              <p>Sistema de Gestión de Activos Tecnológicos</p>
            </div>
          </div>

          <div className="login__illustration">
            <FaDesktop />
          </div>

          <div className="login__features">
            <div className="login__feature">
              <FaUserShield />
              <h3>Control</h3>
              <p>Administra activos tecnológicos de forma centralizada.</p>
            </div>

            <div className="login__feature">
              <FaChartBar />
              <h3>Reportes</h3>
              <p>Consulta información clave para la toma de decisiones.</p>
            </div>

            <div className="login__feature">
              <FaLock />
              <h3>Seguridad</h3>
              <p>Acceso controlado para proteger la información del sistema.</p>
            </div>
          </div>
        </div>

        <div className="login__form-panel">
          <div className="login__lock">
            <FaLock />
          </div>

          <h2 className="login__title">Iniciar sesión</h2>

          <p className="login__subtitle">
            Ingresa tus credenciales para acceder al sistema
          </p>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__group">
              <label>Correo Electrónico</label>

              <input
                name="email"
                type="email"
                placeholder="usuario@empresa.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login__group">
              <label>Contraseña</label>

              <input
                name="password"
                type="password"
                placeholder="****"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && <p className="login__error">{errorMessage}</p>}

            <div className="login__options">
              <label className="login__remember">
                <input type="checkbox" />
                Recordarme
              </label>

              <button
                type="button"
                className="login__forgot"
                onClick={handleForgotPassword}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="login__button"
              disabled={!isFormValid}
            >
              Iniciar sesión
            </button>

            <p className="login__access-note">
              ¿No tienes cuenta? <Link to="/register">Registrarse</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
