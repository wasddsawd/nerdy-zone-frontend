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
import Navbar from "./components/ui/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar page="home"/>
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
