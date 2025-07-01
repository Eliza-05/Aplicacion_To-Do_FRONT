import styles from "../components/Form/Form.module.css";
import backArrow from "../assets/arrow_back.png";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import check from "../assets/CheckSquare.png";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={styles.backButton}
        onClick={() => navigate(-1)}
        aria-label="Volver atrás"
      >
        <img src={backArrow} alt="Volver" />
      </button>
      <div className={styles.titleRow}>
        <Title>To-Do</Title>
        <img className={styles.logo} src={check} alt="check" />
      </div>
      <div className={styles.formContainer}>
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Registrarse</h3>
        <form>
          <label
            htmlFor="nombre"
            style={{ fontWeight: "bold", marginBottom: 4, display: "block" }}
          >
            Nombre
          </label>
          <input
            id="nombre"
            className={styles.input}
            type="text"
            placeholder="Jhon"
            autoComplete="given-name"
          />

          <label
            htmlFor="apellido"
            style={{ fontWeight: "bold", marginBottom: 4, display: "block" }}
          >
            Apellido
          </label>
          <input
            id="apellido"
            className={styles.input}
            type="text"
            placeholder="Perez Cordoba"
            autoComplete="family-name"
          />

          <label
            htmlFor="email"
            style={{ fontWeight: "bold", marginBottom: 4, display: "block" }}
          >
            Correo electrónico
          </label>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="email@domain.com"
            autoComplete="email"
          />

          <label
            htmlFor="password"
            style={{ fontWeight: "bold", marginBottom: 4, display: "block" }}
          >
            Contraseña
          </label>
          <input
            id="password"
            className={styles.input}
            type="password"
            placeholder="**********"
            autoComplete="new-password"
          />

          <label
            htmlFor="confirmPassword"
            style={{ fontWeight: "bold", marginBottom: 4, display: "block" }}
          >
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            className={styles.input}
            type="password"
            placeholder="**********"
            autoComplete="new-password"
          />

          <button
            className={styles.button}
            type="submit"
            style={{ marginTop: 16 }}
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
