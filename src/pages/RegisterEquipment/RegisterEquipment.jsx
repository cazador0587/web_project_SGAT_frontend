import "./RegisterEquipment.css";

function RegisterEquipment() {
  return (
    <section className="register-equipment">
      <div className="register-equipment__container">
        <h2 className="register-equipment__title">Registrar Nuevo Equipo</h2>

        <form className="register-equipment__form">
          <div className="register-equipment__group">
            <label>Nombre del Equipo</label>
            <input type="text" placeholder="Ej. Dell Latitude 5420" />
          </div>

          <div className="register-equipment__group">
            <label>Marca</label>
            <input type="text" placeholder="Dell, HP, Lenovo..." />
          </div>

          <div className="register-equipment__group">
            <label>Modelo</label>
            <input type="text" placeholder="Latitude 5420" />
          </div>

          <div className="register-equipment__group">
            <label>Número de Serie</label>
            <input type="text" placeholder="DL-5420-001" />
          </div>

          <div className="register-equipment__group">
            <label>Tipo de Equipo</label>

            <select>
              <option>Laptop</option>
              <option>Desktop</option>
              <option>Servidor</option>
              <option>Impresora</option>
              <option>Monitor</option>
              <option>Switch</option>
              <option>Router</option>
            </select>
          </div>

          <div className="register-equipment__group">
            <label>Ubicación</label>
            <input type="text" placeholder="Finanzas" />
          </div>

          <div className="register-equipment__group">
            <label>Responsable</label>
            <input type="text" placeholder="Nombre del usuario" />
          </div>

          <div className="register-equipment__group">
            <label>Estado</label>

            <select>
              <option>Activo</option>
              <option>Reparación</option>
              <option>Baja</option>
            </select>
          </div>

          <div className="register-equipment__group">
            <label>Observaciones</label>

            <textarea rows="4" placeholder="Comentarios adicionales..." />
          </div>

          <div className="register-equipment__actions">
            <button type="submit" className="register-equipment__save">
              Guardar Equipo
            </button>

            <button type="button" className="register-equipment__cancel">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterEquipment;
