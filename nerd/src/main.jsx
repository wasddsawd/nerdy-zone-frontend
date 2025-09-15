import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Perfil from "./perfil";
import Eventos from "./paginaEventos";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import "./styles/Geral.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <header>
          <Navbar />
        </header>
        <Route path="/" page="home" element={<Home />} />
        <Route path="/perfil" page="" element={<Perfil />} />
        <Route path="/paginaEventos" element={<Eventos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
