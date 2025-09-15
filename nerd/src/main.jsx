import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Perfil from "./perfil";
import Eventos from "./paginaEventos";
import { AnimatedRoutes } from "./pages/AnimatedRoutes"; // seu arquivo com AnimatePresence
import "./styles/Geral.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/paginaEventos" element={<Eventos />} />
        {/* aqui não coloco mais login/cadastro */}
      </Routes>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
