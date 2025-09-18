import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Perfil from "./pages/perfil";
import Eventos from "./pages/EventosPage";
import venda from "./pages/venda";
import { AnimatedRoutes } from "./pages/AnimatedRoutes"; // seu arquivo com AnimatePresence
import "./styles/Geral.css";
import Navbar from "./components/ui/navbar";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="bottom-right" />
    <Router>
  <Navbar page="home" />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/EventoPage" element={<Eventos />} />
    <Route path="/venda" element={<venda />} />
    {/* 👉 agrupa login/cadastro aqui dentro */}
    <Route path="/*" element={<AnimatedRoutes />} />
  </Routes>
</Router>
  </React.StrictMode>
);
