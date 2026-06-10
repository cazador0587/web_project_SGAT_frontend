import "./Login.css";

function Login() {
  return (
    <section className="login">
      <div className="login__card">
        <h2 className="login__title">Iniciar Sesión</h2>

        <p className="login__subtitle">
          Sistema de Gestión de Activos Tecnológicos
        </p>

        <form className="login__form">
          <div className="login__group">
            <label>Correo Electrónico</label>

            <input type="email" placeholder="usuario@empresa.com" />
          </div>

          <div className="login__group">
            <label>Contraseña</label>

            <input type="password" placeholder="********" />
          </div>

          <button type="submit" className="login__button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
