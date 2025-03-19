import styles from "../styles/navbar.module.css";
import { useNavigate } from "react-router-dom";
export default function History() {
  const navigate = useNavigate();
  function handle() {
    navigate("/history");
  }
  return (
    <div>
      <button onClick={handle} className={styles.history}>
        History
      </button>
    </div>
  );
}
