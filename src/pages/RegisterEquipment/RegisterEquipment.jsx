import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./RegisterEquipment.css";

const initialFormData = {
  name: "",
  brand: "",
  model: "",
  serial: "",
  type: "Laptop",
  location: "",
  responsible: "",
  status: "activo",
  observations: "",
};


function RegisterEquipment() {
  const { setEquipments } = useContext(EquipmentContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEquipment = {
      id: Date.now(),
      ...formData,
    };

    setEquipments((currentEquipments) => [newEquipment, ...currentEquipments]);

    setFormData(initialFormData);
    navigate("/inventory");
  };

  const handleCancel = () => {
    navigate("/inventory");
  };

  return (
    <section className="register-equipment">
      <div className="register-equipment__container">
        <h2 className="register-equipment__title">Registrar Nuevo Equipo</h2>

        <form className="register-equipment__form" onSubmit={handleSubmit}>
          <div className="register-equipment__group">
            <label>Nombre del Equipo</label>
            <input
              name="name"
              type="text"
              placeholder="Ej. Dell Latitude 5420"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Marca</label>
            <input
              name="brand"
              type="text"
              placeholder="Dell, HP, Lenovo..."
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Modelo</label>
            <input
              name="model"
              type="text"
              placeholder="Latitude 5420"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Número de Serie</label>
            <input
              name="serial"
              type="text"
              placeholder="DL-5420-001"
              value={formData.serial}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Tipo de Equipo</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="Servidor">Servidor</option>
              <option value="Impresora">Impresora</option>
              <option value="Monitor">Monitor</option>
              <option value="Switch">Switch</option>
              <option value="Router">Router</option>
            </select>
          </div>

          <div className="register-equipment__group">
            <label>Ubicación</label>
            <input
              name="location"
              type="text"
              placeholder="Finanzas"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Responsable</label>
            <input
              name="responsible"
              type="text"
              placeholder="Nombre del usuario"
              value={formData.responsible}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-equipment__group">
            <label>Estado</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="activo">Activo</option>
              <option value="reparacion">Reparación</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          <div className="register-equipment__group">
            <label>Observaciones</label>
            <textarea
              name="observations"
              rows="4"
              placeholder="Comentarios adicionales..."
              value={formData.observations}
              onChange={handleChange}
            />
          </div>

          <div className="register-equipment__actions">
            <button type="submit" className="register-equipment__save">
              Guardar Equipo
            </button>

            <button
              type="button"
              className="register-equipment__cancel"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterEquipment;
