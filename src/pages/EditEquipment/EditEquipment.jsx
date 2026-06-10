import "./EditEquipment.css";

function EditEquipment() {
  return (
    <section className="edit-equipment">
      <div className="edit-equipment__card">
        <h2 className="edit-equipment__title">Editar Equipo</h2>

        <form className="edit-equipment__form">
          <input
            type="text"
            defaultValue="Dell Latitude 5420"
            placeholder="Nombre del equipo"
          />

          <input type="text" defaultValue="Dell" placeholder="Marca" />

          <input type="text" defaultValue="5420" placeholder="Modelo" />

          <input
            type="text"
            defaultValue="DL-5420-001"
            placeholder="Número de serie"
          />

          <input type="text" defaultValue="Sistemas" placeholder="Ubicación" />

          <select defaultValue="Activo">
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
