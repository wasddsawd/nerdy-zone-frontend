import * as React from "react";
import "../../styles/Geral.css";
import "../../styles/navbar.module.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="dentro">
        <Link to="/" className="">Home</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
