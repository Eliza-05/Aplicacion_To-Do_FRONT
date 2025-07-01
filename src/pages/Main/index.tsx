import { useState } from "react";
import styles from "./Main.module.css";
import Title from "../../components/Title";
import {
  check,
  settings,
  search,
  home,
  calendar,
  list,
  radioRed,
} from "../../assets/icons";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<{ name: string; date: string }[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleAddTask = () => setShowModal(true);

  const handleSaveTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, { name: taskName, date: taskDate }]);
    setTaskName("");
    setTaskDate("");
    setTaskDescription("");
    setShowModal(false);
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Title>To-Do</Title>
          <img src={check} alt="check" className={styles.sidebarLogo} />
        </div>
        <nav>
          <ul className={styles.menuList}>
            <li className={styles.menuItemRow}>
              <img src={home} alt="" />
              <a href="#" className={styles.menuItemActive}>
                Inicio
              </a>
            </li>
            <li className={styles.menuItemRow}>
              <img src={search} alt="" />
              <a href="#" className={styles.menuItem}>
                Buscar Tareas
              </a>
            </li>
            <li className={styles.menuItemRow}>
              <img src={list} alt="" />
              <a href="#" className={styles.menuItem}>
                Categorías
              </a>
            </li>
            <li className={styles.menuItemRow}>
              <img src={calendar} alt="" />
              <a href="#" className={styles.menuItem}>
                Calendario
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.settingsWrapper}>
          <button className={styles.settingsButton}>
            <img src={settings} alt="Configuración" />
          </button>
        </div>
        <h2 className={styles.sectionTitle}>Próximas tareas</h2>
        <div className={styles.taskGroup}>
          <div className={styles.taskGroupTitle}>Hoy</div>
          <div className={styles.taskCard}>
            <ul className={styles.taskList}>
              {tasks.map((task, idx) => (
                <li key={idx} className={styles.taskItem}>
                  <input type="checkbox" className={styles.taskCheckbox} />
                  {task.name}
                  <img className={styles.taskStatus} src={radioRed} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className={styles.addTaskButton} onClick={handleAddTask}>
          Agregar tarea
        </button>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <h3>Agregar nueva tarea</h3>
              <form onSubmit={handleSaveTask}>
                <label>
                  Nombre de la tarea:
                  <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Descripción
                  <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    required
                    rows={4}
                  />
                </label>
                <label>
                  Prioridad
                  <select name="" id="">
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                  </select>
                </label>
                <label>
                  Fecha límite:
                  <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    required
                  />
                </label>
                <div className={styles.modalActions}>
                  <button type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Main;
