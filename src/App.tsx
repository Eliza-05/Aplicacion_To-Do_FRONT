import styles from "./App.module.css";

import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route
          path="*"
          element={
            <div className={styles.container}>
              <header className={styles.header}></header>
              <main className={styles.main}>
                <Routes>
                  <Route path="/" element={<Form />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
