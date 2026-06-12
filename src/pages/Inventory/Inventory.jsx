import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";

function Inventory() {
  const { equipments, setEquipments } = useContext(EquipmentContext);
  const [searchValue, setSearchValue] = useState("");

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
      equipment.status.toLowerCase().includes(searchText) ||
      equipment.responsible.toLowerCase().includes(searchText)
    );
  });

  return (
    <section className="inventory">
      <h2 className="inventory__title">Inventario de Equipos</h2>

      <div className="inventory__summary">
        <div className="inventory__summary-card">
          <h3>{totalEquipments}</h3>
          <p>Total</p>
        </div>

        <div className="inventory__summary-card">
          <h3>{activeEquipments}</h3>
          <p>Activos</p>
        </div>

        <div className="inventory__summary-card">
          <h3>{repairEquipments}</h3>
          <p>Reparación</p>
        </div>

        <div className="inventory__summary-card">
          <h3>{inactiveEquipments}</h3>
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
