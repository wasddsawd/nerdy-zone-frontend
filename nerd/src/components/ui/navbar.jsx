import * as React from "react";
import "../../styles/Geral.css";
import styles from "../../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";
 
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className={styles.fora}>
      <div className={styles.dentro}>
        <Link
          to="/"
          className={location.pathname === "/" ? styles.navativa : ""}
        >
          Home
        </Link>
        <Link
          to="/EventosPage"
          className={`${location.pathname === "/EventosPage" ? styles.navativa : ""}`}
        >
          Eventos
        </Link>
        <Link
          to="/Venda"
          className={`${location.pathname === "/Venda" ? styles.navativa : ""}`}
        >
          Troca e Venda
        </Link>
      </div>
      <div className={styles.cantoDireito}>
        <UserMenu />
      </div>
    </nav>
  );
}
