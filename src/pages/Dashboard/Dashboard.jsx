import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EquipmentContext from "../../contexts/EquipmentContext";
import { getLaptops } from "../../services/dummyApi";
import "./Dashboard.css";

function Dashboard() {
  const { equipments } = useContext(EquipmentContext);
  const [laptops, setLaptops] = useState([]);

  const totalEquipments = equipments.length;
  const activeEquipments = equipments.filter(
    (equipment) => equipment.status === "activo",
  ).length;
  const repairEquipments = equipments.filter(
    (equipment) => equipment.status === "reparacion",
  ).length;
  const inactiveEquipments = equipments.filter(
    (equipment) => equipment.status === "baja",
  ).length;

  const recentEquipments = equipments.slice(0, 3);

  useEffect(() => {
    async function loadLaptops() {
      try {
        const data = await getLaptops();
        setLaptops(data.products.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    }

    loadLaptops();
  }, []);

  return (
    <section className="dashboard">
      <div className="dashboard__hero">
        <div>
          <span className="dashboard__label">Panel principal</span>

          <h2 className="dashboard__title">
            Sistema de Gestión de Activos Tecnológicos
          </h2>

          <p className="dashboard__subtitle">
            Administra equipos de cómputo, consulta inventario y controla el
            estado de los activos tecnológicos desde una sola plataforma.
          </p>
        </div>

        <Link className="dashboard__button" to="/inventory">
          Ver Inventario
        </Link>
      </div>

      <div className="dashboard__stats">
        <div className="dashboard__stat-card">
          <p>Equipos Totales</p>
          <h3>{totalEquipments}</h3>
        </div>

        <div className="dashboard__stat-card dashboard__stat-card_success">
          <p>Activos</p>
          <h3>{activeEquipments}</h3>
        </div>

        <div className="dashboard__stat-card dashboard__stat-card_warning">
          <p>Reparación</p>
          <h3>{repairEquipments}</h3>
        </div>

        <div className="dashboard__stat-card dashboard__stat-card_danger">
          <p>Baja</p>
          <h3>{inactiveEquipments}</h3>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__panel">
          <h3>Equipos recientes</h3>

          {recentEquipments.map((equipment) => (
            <Link
              key={equipment.id}
              to={`/equipment/${equipment.id}`}
              className="dashboard__equipment"
            >
              <div>
                <p>{equipment.name}</p>
                <span>
                  {equipment.brand} · {equipment.location}
                </span>
              </div>

              <strong
                className={`dashboard__status dashboard__status_${equipment.status}`}
              >
                {equipment.status}
              </strong>
            </Link>
          ))}
        </div>

        <div className="dashboard__panel">
          <h3>Referencias desde API externa</h3>

          {laptops.map((laptop) => (
            <div key={laptop.id} className="dashboard__equipment">
              <div>
                <p>{laptop.title}</p>
                <span>{laptop.brand || "Marca no disponible"}</span>
              </div>

              <strong>API</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
