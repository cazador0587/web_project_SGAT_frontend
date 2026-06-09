import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__hero">
        <h2 className="dashboard__title">
          Sistema de Gestión de Activos Tecnológicos
        </h2>

        <p className="dashboard__subtitle">
          Administra equipos de cómputo, consulta inventario y controla el
          estado de los activos tecnológicos.
        </p>

        <div className="dashboard__search">
          <input
            type="text"
            placeholder="Buscar equipo..."
            className="dashboard__input"
          />

          <button className="dashboard__search-btn">Buscar</button>
        </div>
      </div>

      <div className="dashboard__stats">
        <div className="dashboard__stat-card">
          <h3>120</h3>
          <p>Equipos</p>
        </div>

        <div className="dashboard__stat-card">
          <h3>95</h3>
          <p>Activos</p>
        </div>

        <div className="dashboard__stat-card">
          <h3>15</h3>
          <p>Reparación</p>
        </div>

        <div className="dashboard__stat-card">
          <h3>10</h3>
          <p>Baja</p>
        </div>
      </div>

      <div className="dashboard__recent">
        <h3>Equipos recientes</h3>

        <div className="dashboard__equipment">
          <p>Dell Latitude 5420</p>
          <span>Activo</span>
        </div>

        <div className="dashboard__equipment">
          <p>HP EliteBook 840</p>
          <span>Reparación</span>
        </div>

        <div className="dashboard__equipment">
          <p>Lenovo ThinkPad T14</p>
          <span>Activo</span>
        </div>
      </div>

      <Link className="dashboard__button" to="/inventory">
        Ver Inventario
      </Link>
    </section>
  );
}

export default Dashboard;
