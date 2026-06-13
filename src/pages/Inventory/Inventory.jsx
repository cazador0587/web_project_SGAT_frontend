import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import "./Inventory.css";

function Inventory() {
  const { equipments, setEquipments, showToast } = useContext(EquipmentContext);
  const [searchValue, setSearchValue] = useState("");
  const [equipmentToDelete, setEquipmentToDelete] = useState(null);

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

  const handleDeleteEquipment = (equipment) => {
    setEquipmentToDelete(equipment);
  };

  const confirmDeleteEquipment = () => {
    setEquipments((currentEquipments) =>
      currentEquipments.filter(
        (equipment) => equipment.id !== equipmentToDelete.id,
      ),
    );

    setEquipmentToDelete(null);
    showToast("Equipo eliminado correctamente");
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
      <div className="inventory__page-header">
        <h2 className="inventory__title">Inventario de Equipos</h2>

        <div className="inventory__header-actions">
          <Link to="/register-equipment" className="inventory__add-btn">
            <FaPlus />
            Agregar
          </Link>
        </div>
      </div>

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
        <div className="inventory__search-container">
          <label className="inventory__search-label">Buscar equipos</label>
          <input
            className="inventory__input"
            type="text"
            placeholder="Nombre, marca, serie o responsable..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
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
                onClick={() => handleDeleteEquipment(equipment)}
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
      {equipmentToDelete && (
        <ConfirmDeleteModal
          equipment={equipmentToDelete}
          onClose={() => setEquipmentToDelete(null)}
          onConfirm={confirmDeleteEquipment}
        />
      )}
    </section>
  );
}

export default Inventory;
