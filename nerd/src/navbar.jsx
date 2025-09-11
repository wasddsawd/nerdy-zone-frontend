import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div >
        <Link to="/">
          Home
        </Link>
        <Link to="/perfil">
          Perfil
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/paginaEventos">
           PaginaEventos
        </Link>
      </div>
    </nav>
  );
}
