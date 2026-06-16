import { FaCheckCircle } from "react-icons/fa";
import "./Toast.css";

function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="toast">
      <FaCheckCircle className="toast__icon" />

      <span>{message}</span>
    </div>
  );
}

export default Toast;
