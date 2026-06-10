import { useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const initialEquipments = [
  {
    id: 1,
    name: "Latitude 5420",
    brand: "Dell",
    model: "5420",
    serial: "DL-5420-001",
    location: "Sistemas",
    status: "activo",
  },
  {
    id: 2,
    name: "EliteBook 840",
    brand: "HP",
    model: "840 G8",
    serial: "HP-840-002",
    location: "Finanzas",
    status: "reparacion",
  },
  {
    id: 3,
    name: "ThinkPad T14",
    brand: "Lenovo",
    model: "T14",
    serial: "LN-T14-003",
    location: "Recursos Humanos",
    status: "activo",
  },
  {
    id: 4,
    name: "MacBook Air",
    brand: "Apple",
    model: "M2",
    serial: "MBA-M2-004",
    location: "Dirección",
    status: "baja",
  },
];

function Inventory() {
  const [equipments, setEquipments] = useState(initialEquipments);
  const [searchValue, setSearchValue] = useState("");

  const handleDeleteEquipment = (equipmentId) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este equipo?",
    );

    if (!confirmDelete) return;

    setEquipments((currentEquipments) =>
      currentEquipments.filter((equipment) => equipment.id !== equipmentId),
    );
  };

  const filteredEquipments = equipments.filter((equipment) => {
    const searchText = searchValue.toLowerCase();

    return (
      equipment.name.toLowerCase().includes(searchText) ||
      equipment.brand.toLowerCase().includes(searchText) ||
      equipment.model.toLowerCase().includes(searchText) ||
      equipment.serial.toLowerCase().includes(searchText) ||
      equipment.location.toLowerCase().includes(searchText) ||
      equipment.status.toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="inventory">
      <h2 className="inventory__title">Inventario de Equipos</h2>

      <div className="inventory__summary">
        <div className="inventory__summary-card">
          <h3>120</h3>
          <p>Total</p>
        </div>

        <div className="inventory__summary-card">
          <h3>95</h3>
          <p>Activos</p>
        </div>

        <div className="inventory__summary-card">
          <h3>15</h3>
          <p>Reparación</p>
        </div>

        <div className="inventory__summary-card">
          <h3>10</h3>
          <p>Baja</p>
        </div>
      </div>

      <div className="inventory__toolbar">
        <input
          className="inventory__input"
          type="text"
          placeholder="Buscar equipo..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="inventory__search-btn" type="button">
          <FaSearch /> Buscar
        </button>

        <Link to="/register-equipment" className="inventory__add-btn">
          <FaPlus /> Registrar
        </Link>
      </div>

      <div className="inventory__table">
        <div className="inventory__header">
          <span>Equipo</span>
          <span>Marca</span>
          <span>Modelo</span>
          <span>Serie</span>
          <span>Ubicación</span>
          <span>Estado</span>
          <span>Acciones</span>
        </div>

        {filteredEquipments.map((equipment) => (
          <div key={equipment.id} className="inventory__row">
            <Link
              to={`/equipment/${equipment.id}`}
              className="inventory__equipment-link"
            >
              {equipment.name}
            </Link>

            <span>{equipment.brand}</span>
            <span>{equipment.model}</span>
            <span>{equipment.serial}</span>
            <span>{equipment.location}</span>

            <span
              className={`inventory__status inventory__status_${equipment.status}`}
            >
              {equipment.status}
            </span>

            <div className="inventory__actions">
              <Link
                to={`/equipment/${equipment.id}/edit`}
                className="inventory__edit-btn"
              >
                <FaEdit />
              </Link>

              <button
                className="inventory__delete-btn"
                type="button"
                onClick={() => handleDeleteEquipment(equipment.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {filteredEquipments.length === 0 && (
          <p className="inventory__empty">No se encontraron equipos.</p>
        )}
      </div>
    </section>
  );
}

export default Inventory;
