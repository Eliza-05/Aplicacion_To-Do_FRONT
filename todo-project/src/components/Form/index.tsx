import stylesTitle from "../Title/Title.module.css";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <h2 className={stylesTitle.title}>Crear una cuenta</h2>
      <p className={styles.text}>
        Introduce tu email para registrarte en esta app
      </p>
      <input
        className={styles.input}
        type="email"
        placeholder="email@domain.com"
      />
      <button className={styles.button}>Registrarse con el correo</button>
      <p className={styles.terms}>
        By clicking continue, you agree to our <span>Terms of Service</span> and{" "}
        <span>Privacy Policy</span>
      </p>
      <p className={styles.loginText}>¿Ya tienes una cuenta?</p>
      <button className={styles.buttonSecondary}>Iniciar sesión</button>
    </div>
  );
}

export default Form;
