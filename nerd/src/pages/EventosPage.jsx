import React from "react";
import styles from "../styles/eventos.module.css";
import { useNavigate } from "react-router-dom";


export default function EventsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.events_page}>
      {/* Banner */}
      <header className={styles.events_banner}>
        <div className={styles.img}/>
      </header>

      <div className={styles.events_layout}>
        {/* Sidebar */}
        <aside className={styles.events_sidebar}>
          <section className={styles.filters}>
            <h1>Filtros</h1>
            <label><input type="checkbox" /> Anime</label>
            <label><input type="checkbox" /> Games</label>
            <label><input type="checkbox" /> HQs</label>
            <label><input type="checkbox" /> Cosplay</label>
            <label><input type="checkbox" /> Tecnologia</label>
          </section>

          {/* Botão Criar Eventos */}
          <button 
            className={styles.btncriar} 
            onClick={() => navigate("/Criareventos")}
          >
            Criar Eventos
          </button>
        </aside>

        <div className={styles.container}>
          <section className={styles.countdown}>
            <h1>Próximo Evento em:</h1>
            <div className={styles.countdown_timer}>00d 00h 00m 00s</div>
          </section>

          {/* Main Content */}
          <main className={styles.events_main}>
            <section className={styles.upcoming_events}>
              <h1>Eventos Futuros</h1>
              <div className={styles.event_card}>
                <h3>Nome do Evento</h3>
                <button>Inscrever-se</button>
              </div>
            </section>

            <section className={styles.event_details}>
              <h1>Detalhes</h1>
              <div className={styles.map_placeholder}>[Mapa]</div>
              <div className={styles.guests_placeholder}>[Convidados]</div>
              <div className={styles.competitions_placeholder}>[Competições]</div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
