import * as React from "react";
import { useState } from 'react'
import "../../styles/Geral.css";
import styles from "../../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
export default function Navbar(className) {
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
          className={`${location.pathname === "/perfil" ? styles.navativa : {}} ${location.pathname === "/login" || location.pathname === "" ? styles.navs : {}}`}
          onClick={() => setPage("home")}
        >
          Perfil
        </Link>
        <Link
          to="/login"
          id={styles.home}
          className={`${location.pathname === "/perfil" ? styles.navativa : {}} ${location.pathname === "/login" || location.pathname === "" ? styles.navs : {}}`}
          onClick={() => setPage("home")}
        >
          Login
        </Link>
        <Link
          to="/"
          id={styles.home}
          className={location.pathname === "/" ? styles.navativa : {}}
          onClick={() => setPage("home")}
        >
          Eventos
        </Link>
      </div>
    </nav>
  );
}
