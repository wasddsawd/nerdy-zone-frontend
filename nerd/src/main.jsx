import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Home from "./Home";
import Perfil from "./perfil";
import Eventos from "./paginaEventos";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import "./styles/Geral.css";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="routes-wrapper">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login key="login" />} />
          <Route path="/cadastro" element={<Cadastro key="cadastro" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/paginaEventos" element={<Eventos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
