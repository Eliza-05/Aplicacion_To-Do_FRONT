import styles from "../components/Form/Form.module.css";
import backArrow from "../assets/arrow_back.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import check from "../assets/CheckSquare.png";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={backArrow} alt="" />
      </button>
      <div className={styles.titleRow}>
        <Title>To-Do</Title>
        <img className={styles.logo} src={check} alt="check" />
      </div>
      <div className={styles.formContainer}>
        <h2>Iniciar sesión</h2>
        <p className={styles.terms}>
          Introduce tu correo y contraseña para iniciar sesión
        </p>
        <input
          className={styles.input}
          type="email"
          placeholder="email@domain.com"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="**********"
        />
        <Link to="/main" className={styles.link}>
          <button className={styles.button}>Iniciar sesión</button>
        </Link>
      </div>
    </>
  );
}

export default Login;
