import { useState } from "react";
import styles from "../styles/eventos.module.css"

export default function Eventos() {
  const [eventos, setEventos] = useState([
    { id: 1, titulo: "Evento React", data: "2025-10-01", descricao: "Aprender React" },
    { id: 2, titulo: "Festa Nerd", data: "2025-11-15", descricao: "Festa com jogos e tech" },
  ]);

  const [novoEvento, setNovoEvento] = useState({
    titulo: "",
    data: "",
    descricao: "",
  });

  // Atualiza os dados do formulário
  function handleChange(e) {
    setNovoEvento({ ...novoEvento, [e.target.name]: e.target.value });
  }

  // Adiciona novo evento
  function adicionarEvento(e) {
    e.preventDefault();
    if (!novoEvento.titulo || !novoEvento.data) {
      alert("Preencha o título e a data!");
      return;
    }

    setEventos([
      ...eventos,
      { id: Date.now(), ...novoEvento },
    ]);

    setNovoEvento({ titulo: "", data: "", descricao: "" });
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Criar novo evento</h2>

        <input
          type="text"
          name="titulo"
          placeholder="Nome do evento"
          value={novoEvento.titulo}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="date"
          name="data"
          value={novoEvento.data}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <textarea
          name="descricao"
          placeholder="Detalhes do evento (opcional)"
          value={novoEvento.descricao}
          onChange={handleChange}
          className={styles.textarea}
        />

        <button onClick={adicionarEvento} className={styles.button}>
          Adicionar Evento
        </button>

        {/* Lista de eventos */}
        <h3 className={{ mrginTop: 40 }}>Lista de eventos</h3>
        {eventos.length === 0 ? (
          <p>Nenhum evento cadastrado.</p>
        ) : (
          eventos.map((ev) => (
            <div key={ev.id} className={styles.card}>
              <h3 className={{ mrginBottom: 5 }}>{ev.titulo}</h3>
              <p><strong>Data:</strong> {ev.data}</p>
              <p><strong>Descrição:</strong> {ev.descricao || "Sem descrição"}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

