import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaEdit,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";
import EquipmentContext from "../../contexts/EquipmentContext";
import "./EquipmentDetail.css";

function EquipmentDetail() {
  const { id } = useParams();
  const { equipments } = useContext(EquipmentContext);

  const equipment = equipments.find((item) => item.id === Number(id));

  if (!equipment) {
    return (
      <section className="equipment-detail">
        <h2>Equipo no encontrado</h2>
      </section>
    );
  }

  const formattedDate = equipment.createdAt
    ? new Date(equipment.createdAt).toLocaleDateString("es-MX")
    : "No disponible";

  return (
    <section className="equipment-detail">
      <div className="equipment-detail__hero">
        <div>
          <span
            className={`equipment-detail__status equipment-detail__status_${equipment.status}`}
          >
            {equipment.status}
          </span>

          <h2 className="equipment-detail__title">{equipment.name}</h2>

          <p className="equipment-detail__subtitle">
            {equipment.type || "Equipo tecnológico"} · {equipment.brand}
          </p>
        </div>

        <div className="equipment-detail__actions">
          <Link
            to={`/equipment/${equipment.id}/edit`}
            className="equipment-detail__edit"
          >
            <FaEdit />
            Editar equipo
          </Link>

          <Link to="/inventory" className="equipment-detail__back">
            <FaArrowLeft />
            Volver al inventario
          </Link>
        </div>
      </div>

      <div className="equipment-detail__grid">
        <div className="equipment-detail__card">
          <h3>Información técnica</h3>

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
              <span>Tipo</span>
              <p>{equipment.type || "No especificado"}</p>
            </div>
          </div>
        </div>

        <div className="equipment-detail__card">
          <h3>Asignación</h3>

          <div className="equipment-detail__assignment">
            <div>
              <FaUser />
              <div>
                <span>Responsable</span>
                <p>{equipment.responsible}</p>
              </div>
            </div>

            <div>
              <FaMapMarkerAlt />
              <div>
                <span>Ubicación</span>
                <p>{equipment.location}</p>
              </div>
            </div>

            <div>
              <FaCalendarAlt />
              <div>
                <span>Fecha de registro</span>
                <p>{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="equipment-detail__card equipment-detail__card_full">
          <h3>Observaciones</h3>

          <p className="equipment-detail__observations">
            {equipment.observations || "Sin observaciones registradas."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default EquipmentDetail;
