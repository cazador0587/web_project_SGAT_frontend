import { useParams } from "react-router-dom";
import { initialEquipments } from "../../data/equipments";
import "./EditEquipment.css";

function EditEquipment() {
  const { id } = useParams();

  const equipment = initialEquipments.find((item) => item.id === Number(id));

  if (!equipment) {
    return (
      <section className="edit-equipment">
        <h2>Equipo no encontrado</h2>
      </section>
    );
  }

  return (
    <section className="edit-equipment">
      <div className="edit-equipment__card">
        <h2 className="edit-equipment__title">Editar Equipo</h2>

        <form className="edit-equipment__form">
          <input
            type="text"
            defaultValue={equipment.name}
            placeholder="Nombre del equipo"
          />

          <input type="text" defaultValue={equipment.brand} placeholder="Marca" />

          <input type="text" defaultValue={equipment.model} placeholder="Modelo" />

          <input
            type="text"
            defaultValue={equipment.serial}
            placeholder="Número de serie"
          />

          <input type="text" defaultValue={equipment.location} placeholder="Ubicación" />

          <select defaultValue={equipment.status}>
            <option>Activo</option>
            <option>Reparación</option>
            <option>Baja</option>
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
