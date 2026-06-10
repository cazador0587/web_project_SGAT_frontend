
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLaptops } from "../../services/dummyApi";
import "./Dashboard.css";

function Dashboard() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    async function loadLaptops() {
      try {
        const data = await getLaptops();

        setLaptops(data.products.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    }

    loadLaptops();
  }, []);

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
        <h3>Equipos obtenidos desde API</h3>

        {laptops.map((laptop) => (
          <div key={laptop.id} className="dashboard__equipment">
            <p>{laptop.title}</p>

            <span>{laptop.brand}</span>
          </div>
        ))}
      </div>

      <Link className="dashboard__button" to="/inventory">
        Ver Inventario
      </Link>
    </section>
  );
}

export default Dashboard;
