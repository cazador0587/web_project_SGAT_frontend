import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    location: equipment?.location || "",
    responsible: equipment?.responsible || "",
    status: equipment?.status || "activo",
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

    navigate("/inventory");
  };

  return (
    <section className="edit-equipment">
      <div className="edit-equipment__card">
        <h2 className="edit-equipment__title">Editar Equipo</h2>

        <form className="edit-equipment__form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del equipo"
            required
          />

          <input
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Marca"
            required
          />

          <input
            name="model"
            type="text"
            value={formData.model}
            onChange={handleChange}
            placeholder="Modelo"
            required
          />

          <input
            name="serial"
            type="text"
            value={formData.serial}
            onChange={handleChange}
            placeholder="Número de serie"
            required
          />

          <input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ubicación"
            required
          />

          <input
            name="responsible"
            type="text"
            value={formData.responsible}
            onChange={handleChange}
            placeholder="Responsable"
            required
          />

          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="activo">Activo</option>
            <option value="reparacion">Reparación</option>
            <option value="baja">Baja</option>
          </select>

          <button type="submit" className="edit-equipment__button">
            Guardar Cambios
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditEquipment;
