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
        >
          Home
        </Link>
        <Link
          to="/perfil"
          className={`${location.pathname === "/perfil" ? styles.navativa : ""}`}
        >
          Perfil
        </Link>
        <Link
          to="/login"
          className={`${location.pathname === "/login" || location.pathname === "/cadastro" ? styles.navativa : ""}`}
        >
          Login
        </Link>
        <Link
          to="/EventosPage"
          className={`${location.pathname === "/EventosPage" ? styles.navativa : ""}`}
        >
          Eventos
        </Link>
      </div>
    </nav>
  );
}
