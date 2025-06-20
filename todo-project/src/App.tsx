import styles from "./App.module.css";
import Title from "./components/Title";
import check from "./assets/CheckSquare.png";
import Form from "./components/Form";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title>To-Do</Title>
        <img src={check} alt="check" className={styles.logo} />
      </header>
      <main className={styles.main}>
        <Form></Form>
      </main>
    </div>
  );
}
export default App;
