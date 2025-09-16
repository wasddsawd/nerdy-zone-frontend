import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Perfil from "./pages/perfil";
import Eventos from "./pages/paginaEventos";
import { AnimatedRoutes } from "./pages/AnimatedRoutes"; // seu arquivo com AnimatePresence
import "./styles/Geral.css";
import Navbar from "./components/ui/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar page="home"/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/paginaEventos" element={<Eventos />} />
        {/* aqui não coloco mais login/cadastro */}
      </Routes>
      <AnimatedRoutes />x
    </Router>
  </React.StrictMode>
);
