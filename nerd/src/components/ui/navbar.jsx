import * as React from "react";
import "../../styles/Geral.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar(selecao) {
  const [page, setPage] = useState(selecao.page);
  return (
    <nav className={styles.fora}>
      <div className={styles.dentro}>
        <Link
          to="/"
          id={styles.home}
          className={styles.navs}
          style={page === "home" ? { display: "block" } : {}}
          onClick={() => setPage("home")}
        >
          Home
        </Link>
        <Link
          to="/perfil"
          id={styles.perfil}
          className={styles.navs}
          style={page === "perfil" ? { display: "block" } : {}}
          onClick={() => setPage("perfil")}
        >
          Perfil
        </Link>
        <Link
          to="/login"
          id={styles.login}
          className={styles.navs}
          style={page === "login" ? { display: "block" } : {}}
          onClick={() => setPage("login")}
        >
          Login
        </Link>
        <Link
          to="/paginaEventos"
          id={styles.eventos}
          className={styles.navs}
          style={page === "eventos" ? { display: "block" } : {}}
          onClick={() => setPage("eventos")}
        >
          Eventos
        </Link>
      </div>
    </nav>
  );
}
