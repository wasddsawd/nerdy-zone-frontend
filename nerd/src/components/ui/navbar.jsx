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
          className={location.pathname === "/" ? styles.navativa : ""}
          onClick={() => setPage("home")}
        >
          Home
        </Link>
        <Link
          to="/perfil"
          className={`${location.pathname === "/perfil" ? styles.navativa : ""}`}
          onClick={() => setPage("home")}
        >
          Perfil
        </Link>
        <Link
          to="/login"
          className={`${location.pathname === "/login" || location.pathname === "/cadastro" ? styles.navativa : ""}`}
          onClick={() => setPage("home")}
        >
          Login
        </Link>
        <Link
          to="/paginaEventos"
          className={`${location.pathname === "/paginaEventos" ? styles.navativa : ""}`}
          onClick={() => setPage("home")}
        >
          Eventos
        </Link>
      </div>
    </nav>
  );
}
