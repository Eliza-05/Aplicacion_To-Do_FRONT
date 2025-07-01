import stylesTitle from "../Title/Title.module.css";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import check from "../../assets/CheckSquare.png";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";

interface FormProps {
  onRegistrationSuccess?: (email: string) => void;
}

function Form({ onRegistrationSuccess }: FormProps) {
  const { email, error, isLoading, setEmail, handleSubmit } =
    useRegistrationForm(onRegistrationSuccess);
  return (
    <>
      <div className={styles.titleRow}>
        <Title>To-Do</Title>
        <img className={styles.logo} src={check} alt="check" />
      </div>
      <div className={styles.formContainer}>
        <h2 className={stylesTitle.title}>Crear una cuenta</h2>
        <p className={styles.text}>
          Introduce tu email para registrarte en esta app
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Verificando..." : "Registrarse con el correo"}
          </button>
        </form>
        <p className={styles.terms}>
          By clicking continue, you agree to our <span>Terms of Service</span>{" "}
          and <span>Privacy Policy</span>
        </p>
        <p className={styles.loginText}>¿Ya tienes una cuenta?</p>
        <Link className={styles.link} to="/login">
          <button className={styles.buttonSecondary}>Iniciar sesión</button>
        </Link>
      </div>
    </>
  );
}

export default Form;
