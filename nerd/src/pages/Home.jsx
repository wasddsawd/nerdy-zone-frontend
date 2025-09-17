// Home.jsx
import React from 'react'
import styles from '../styles/Home.module.css'
import '../styles/Geral.css'
import nerdy from '../assets/nerdy.png'
import Navbar from '../components/ui/navbar'

export default function Home() {
  return (
    <>
      {/* Cabeçalho */}
      <Navbar />

      <div className={styles.logo}>
        <img src={nerdy} alt="Logo NerdyZone" />
      </div>

      <main className={styles.all}>
        <div className={styles.container}>
          {/* Banner */}
          <section className={styles.banner}>
            <h1>Bem-vindo à NerdyZone</h1>
            <p>Seu portal geek e tecnológico!</p>
            <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Saiba Mais
            </button>
          </section>

          {/* Cards */}
          <section className={styles.cards_container}>
            <article className={styles.card}>
              <h2>Novidades</h2>
              <p>Fique por dentro das últimas tendências do mundo nerd.</p>
            </article>

            <article className={styles.card}>
              <h2>Comunidade</h2>
              <p>Participe de eventos e troque experiências com outros fãs.</p>
            </article>

            <article className={styles.card}>
              <h2>Loja</h2>
              <p>Encontre produtos exclusivos e colecionáveis.</p>
            </article>
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>© 2025 NerdyZone. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
