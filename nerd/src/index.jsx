import React from "react";
import "./index.css";

export default function App() {
  return (
    <>
      {/* Cabeçalho */}
      <header>
        <div className="logo">
          <img src="public/nerdy.png" alt="Logo NerdyZone" />
          <span>NerdyZone</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner">
        <h1>Bem-vindo à NerdyZone</h1>
        <p>Seu portal geek e tecnológico!</p>
        <button>Saiba Mais</button>
      </section>

      {/* Cards de destaque */}
      <section className="cards-container">
        <div className="card">
          <h2>Novidades</h2>
          <p>Fique por dentro das últimas tendências do mundo nerd.</p>
        </div>
        <div className="card">
          <h2>Comunidade</h2>
          <p>Participe de eventos e troque experiências com outros fãs.</p>
        </div>
        <div className="card">
          <h2>Loja</h2>
          <p>Encontre produtos exclusivos e colecionáveis.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <p>© 2025 NerdyZone. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
