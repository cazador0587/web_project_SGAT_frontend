import { useContext } from "react";
import { useParams } from "react-router-dom";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./EquipmentDetail.css";

function EquipmentDetail() {
  const { id } = useParams();
  const { equipments } = useContext(EquipmentContext);
  const equipment = equipments.find(
    (item) => item.id === Number(id)
  );

  if (!equipment) {
    return (
      <section className="equipment-detail">
        <h2>Equipo no encontrado</h2>
      </section>
    );
  }

  return (
    <section className="equipment-detail">
      <div className="equipment-detail__card">
        <h2 className="equipment-detail__title">{equipment.name}</h2>

        <div className="equipment-detail__info">
          <div>
            <span>Marca</span>
            <p>{equipment.brand}</p>
          </div>

          <div>
            <span>Modelo</span>
            <p>{equipment.model}</p>
          </div>

          <div>
            <span>No. Serie</span>
            <p>{equipment.serial}</p>
          </div>

          <div>
            <span>Ubicación</span>
            <p>{equipment.location}</p>
          </div>

          <div>
            <span>Estado</span>
            <p>{equipment.status}</p>
          </div>

          <div>
            <span>Usuario asignado</span>
            <p>{equipment.responsible}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentDetail;
