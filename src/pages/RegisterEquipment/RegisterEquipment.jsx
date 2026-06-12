import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaTimes } from "react-icons/fa";
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
      createdAt: new Date().toISOString(),
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
      <div className="register-equipment__hero">
        <div>
          <span className="register-equipment__label">Gestión de activos</span>

          <h2 className="register-equipment__title">Registro de Equipos</h2>

          <p className="register-equipment__subtitle">
            Captura la información técnica, ubicación y responsable del activo.
          </p>
        </div>
      </div>

      <form className="register-equipment__form" onSubmit={handleSubmit}>
        <div className="register-equipment__section">
          <h3>Información técnica</h3>

          <div className="register-equipment__grid">
            <label className="register-equipment__group">
              Nombre del equipo
              <input
                name="name"
                type="text"
                placeholder="Ej. Dell Latitude 5420"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register-equipment__group">
              Marca
              <input
                name="brand"
                type="text"
                placeholder="Dell, HP, Lenovo..."
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register-equipment__group">
              Modelo
              <input
                name="model"
                type="text"
                placeholder="Latitude 5420"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register-equipment__group">
              Número de serie
              <input
                name="serial"
                type="text"
                placeholder="DL-5420-001"
                value={formData.serial}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register-equipment__group">
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

            <label className="register-equipment__group">
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

        <div className="register-equipment__section">
          <h3>Asignación</h3>

          <div className="register-equipment__grid">
            <label className="register-equipment__group">
              Ubicación
              <input
                name="location"
                type="text"
                placeholder="Finanzas"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>

            <label className="register-equipment__group">
              Responsable
              <input
                name="responsible"
                type="text"
                placeholder="Nombre del usuario"
                value={formData.responsible}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>

        <div className="register-equipment__section">
          <h3>Observaciones</h3>

          <label className="register-equipment__group">
            Comentarios adicionales
            <textarea
              name="observations"
              rows="4"
              placeholder="Comentarios adicionales..."
              value={formData.observations}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="register-equipment__actions">
          <button
            type="button"
            className="register-equipment__cancel"
            onClick={handleCancel}
          >
            <FaTimes />
            Cancelar
          </button>

          <button type="submit" className="register-equipment__save">
            <FaSave />
            Guardar equipo
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterEquipment;
