import { FaExclamationTriangle, FaTrash } from "react-icons/fa";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({ equipment, onClose, onConfirm }) {
  if (!equipment) return null;

  return (
    <div className="confirm-modal">
      <div className="confirm-modal__overlay" onClick={onClose}></div>

      <div className="confirm-modal__content">
        <div className="confirm-modal__icon">
          <FaExclamationTriangle />
        </div>

        <h2 className="confirm-modal__title">Eliminar equipo</h2>

        <p className="confirm-modal__text">
          ¿Estás seguro de que deseas eliminar el equipo{" "}
          <strong>{equipment.name}</strong>?
        </p>

        <p className="confirm-modal__warning">
          Esta acción no se puede deshacer.
        </p>

        <div className="confirm-modal__actions">
          <button
            type="button"
            className="confirm-modal__cancel"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="confirm-modal__delete"
            onClick={onConfirm}
          >
            <FaTrash />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
