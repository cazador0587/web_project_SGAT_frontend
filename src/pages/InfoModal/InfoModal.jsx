import { FaCheckCircle } from "react-icons/fa";
import "./InfoModal.css";

function InfoModal({ title, message, buttonText, onConfirm }) {
  return (
    <div className="info-modal">
      <div className="info-modal__content">
        <FaCheckCircle className="info-modal__icon" />

        <h2>{title}</h2>
        <p>{message}</p>

        <button type="button" onClick={onConfirm}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoModal;
