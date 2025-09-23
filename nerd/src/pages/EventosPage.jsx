import React from "react";
import styles from "../styles/eventos.module.css";

export default function EventsPage() {
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
          {/*
          <section className={styles.calendar}>
            <h1>Calendário</h1>
            <div className={styles.calendar_placeholder}>[Calendário]</div>
          </section>

          <section className={styles.featured}>
            <h1>Destaques</h1>
            <ul>
              <li>Evento 1</li>
              <li>Evento 2</li>
            </ul>
          </section>

          <section className={styles.gallery}>
            <h1>Galeria</h1>
            <div className={styles.gallery_placeholder}>[Imagens]</div>
          </section>

          <section className={styles.comments}>
            <h1>Comentários</h1>
            <div className={styles.comments_placeholder}>[Comentários]</div>
          </section>
          */}
          <button className={styles.btncriar}>Criar Eventos</button>
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


