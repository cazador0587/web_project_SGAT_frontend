import { useContext } from "react";
import { FaLock, FaUserShield, FaChartBar, FaDesktop } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./Login.css";

function Login() {
  const { showToast } = useContext(EquipmentContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleForgotPassword = () => {
    showToast("Función de recuperación de contraseña próximamente");
  };

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

              <input type="email" placeholder="usuario@empresa.com" required />
            </div>

            <div className="login__group">
              <label>Contraseña</label>

              <input type="password" placeholder="****" required />
            </div>

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

            <button type="submit" className="login__button">
              Iniciar sesión
            </button>

            <p className="login__access-note">
              ¿No tienes acceso? Contacta al administrador del sistema.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
