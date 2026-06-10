import "./EquipmentDetail.css";

function EquipmentDetail() {
  return (
    <section className="equipment-detail">
      <div className="equipment-detail__card">
        <h2 className="equipment-detail__title">Dell Latitude 5420</h2>

        <div className="equipment-detail__info">
          <div>
            <span>Marca</span>
            <p>Dell</p>
          </div>

          <div>
            <span>Modelo</span>
            <p>5420</p>
          </div>

          <div>
            <span>No. Serie</span>
            <p>DL-5420-001</p>
          </div>

          <div>
            <span>Ubicación</span>
            <p>Sistemas</p>
          </div>

          <div>
            <span>Estado</span>
            <p>Activo</p>
          </div>

          <div>
            <span>Usuario asignado</span>
            <p>Fernando Salvador</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentDetail;
