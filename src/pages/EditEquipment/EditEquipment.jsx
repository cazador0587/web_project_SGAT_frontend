import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSave, FaTimes } from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./EditEquipment.css";

function EditEquipment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { equipments, setEquipments } = useContext(EquipmentContext);

  const equipment = equipments.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState({
    name: equipment?.name || "",
    brand: equipment?.brand || "",
    model: equipment?.model || "",
    serial: equipment?.serial || "",
    type: equipment?.type || "Laptop",
    location: equipment?.location || "",
    responsible: equipment?.responsible || "",
    status: equipment?.status || "activo",
    observations: equipment?.observations || "",
  });

  if (!equipment) {
    return (
      <section className="edit-equipment">
        <h2>Equipo no encontrado</h2>
      </section>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEquipments((currentEquipments) =>
      currentEquipments.map((item) =>
        item.id === Number(id)
          ? {
              ...item,
              ...formData,
            }
          : item,
      ),
    );

    navigate(`/equipment/${id}`);
  };

  const handleCancel = () => {
    navigate(`/equipment/${id}`);
  };

  return (
    <section className="edit-equipment">
      <div className="edit-equipment__hero">
        <div>
          <span className="edit-equipment__label">Gestión de activos</span>

          <h2 className="edit-equipment__title">
            Editar equipo: {equipment.name}
          </h2>

          <p className="edit-equipment__subtitle">
            Actualiza la información técnica, ubicación y estado del activo.
          </p>
        </div>
      </div>

      <form className="edit-equipment__form" onSubmit={handleSubmit}>
        <div className="edit-equipment__section">
          <h3>Información técnica</h3>

          <div className="edit-equipment__grid">
            <label className="edit-equipment__group">
              Nombre del equipo
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre del equipo"
                required
              />
            </label>

            <label className="edit-equipment__group">
              Marca
              <input
                name="brand"
                type="text"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Marca"
                required
              />
            </label>

            <label className="edit-equipment__group">
              Modelo
              <input
                name="model"
                type="text"
                value={formData.model}
                onChange={handleChange}
                placeholder="Modelo"
                required
              />
            </label>

            <label className="edit-equipment__group">
              Número de serie
              <input
                name="serial"
                type="text"
                value={formData.serial}
                onChange={handleChange}
                placeholder="Número de serie"
                required
              />
            </label>

            <label className="edit-equipment__group">
              Tipo de equipo
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop</option>
                <option value="Servidor">Servidor</option>
                <option value="Impresora">Impresora</option>
                <option value="Monitor">Monitor</option>
                <option value="Switch">Switch</option>
                <option value="Router">Router</option>
              </select>
            </label>

            <label className="edit-equipment__group">
              Estado
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="activo">Activo</option>
                <option value="reparacion">Reparación</option>
                <option value="baja">Baja</option>
              </select>
            </label>
          </div>
        </div>

        <div className="edit-equipment__section">
          <h3>Asignación</h3>

          <div className="edit-equipment__grid">
            <label className="edit-equipment__group">
              Ubicación
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ubicación"
                required
              />
            </label>

            <label className="edit-equipment__group">
              Responsable
              <input
                name="responsible"
                type="text"
                value={formData.responsible}
                onChange={handleChange}
                placeholder="Responsable"
                required
              />
            </label>
          </div>
        </div>

        <div className="edit-equipment__section">
          <h3>Observaciones</h3>

          <label className="edit-equipment__group">
            Comentarios adicionales
            <textarea
              name="observations"
              rows="4"
              value={formData.observations}
              onChange={handleChange}
              placeholder="Comentarios adicionales..."
            />
          </label>
        </div>

        <div className="edit-equipment__actions">
          <button
            type="button"
            className="edit-equipment__cancel"
            onClick={handleCancel}
          >
            <FaTimes />
            Cancelar
          </button>

          <button type="submit" className="edit-equipment__save">
            <FaSave />
            Guardar cambios
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditEquipment;
