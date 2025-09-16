import React from "react";
import styles from "../styles/Home.module.css";
import "../styles/Geral.css";
import nerdy from "../assets/nerdy.png";
import Navbar from "../components/ui/navbar";

export default function App() {
  return (
    <>
      <div className={styles.all}>
        {/* Cabeçalho */}

        <div>
          <div className={styles.logo}>
            <img src={nerdy} />
          </div>
        </div>
        {/* Banner */}
        <section className={styles.banner}>
          <h1>Bem-vindo à NerdyZone</h1>
          <p>Seu portal geek e tecnológico!</p>
          <button>Saiba Mais</button>
        </section>

        {/* Cards de destaque */}
        <section className={styles.cards_container}>
          <div className={styles.card}>
            <h2>Novidades</h2>
            <p>Fique por dentro das últimas tendências do mundo nerd.</p>
          </div>
          <div className={styles.card}>
            <h2>Comunidade</h2>
            <p>Participe de eventos e troque experiências com outros fãs.</p>
          </div>
          <div className={styles.card}>
            <h2>Loja</h2>
            <p>Encontre produtos exclusivos e colecionáveis.</p>
          </div>
        </section>
      </div>
      {/* Rodapé */}
      <footer>
        <p className={styles.footer}>
          © 2025 NerdyZone. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
