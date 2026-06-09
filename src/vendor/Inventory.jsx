import "./Inventory.css";

function Inventory() {
  const equipments = [
    {
      id: 1,
      name: "Latitude Dell",
      status: "Activo",
    },
    {
      id: 2,
      name: "Latitude Dell",
      status: "Reparación",
    },
    {
      id: 3,
      name: "Latitude Dell",
      status: "Activo",
    },
    {
      id: 4,
      name: "Latitude Dell",
      status: "Activo",
    },
  ];

  return (
    <section className="inventory">
      <h2>Buscar Equipos</h2>

      <div className="inventory__actions">
        <input type="text" placeholder="Buscar equipo..." />

        <button>Buscar</button>

        <button>Nuevo Equipo</button>
      </div>

      <div className="inventory__list">
        {equipments.map((equipment) => (
          <div key={equipment.id} className="inventory__item">
            <span>{equipment.name}</span>

            <span>{equipment.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inventory;
