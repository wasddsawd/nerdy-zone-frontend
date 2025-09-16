import * as React from "react";
import { useState } from 'react'
import "../../styles/Geral.css";
import styles from "../../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className={styles.fora}>
      <div className={styles.dentro}>
        <Link
          to="/"
          id={styles.home}
          className={location.pathname === "/" ? styles.navativa : {}}
          onClick={() => setPage("home")}
        >
          Home
        </Link>
        <Link
          to="/perfil"
          id={styles.home}
          className={`${location.pathname === "/perfil" ? styles.navativa : {}}`}
          onClick={() => setPage("home")}
        >
          perfil
        </Link>
        <Link to="/paginaEventos">
          PaginaEventos
        </Link>
        <Link
          to="/login"
          id={styles.home}
          className={`${location.pathname === "/login" ? styles.navativa : {}}`}
          onClick={() => setPage("home")}
        >
          Login
        </Link>
        <Link
          to="/paginaEventos"
          id={styles.home}
          className={`${location.pathname === "/paginaEventos" ? styles.navativa : {}}`}
          onClick={() => setPage("home")}
        >
          Eventos
        </Link>
      </div>
    </nav>
  );
}
