import React, { useState } from "react";

export default function Eventos() {
  const [events, setEvents] = useState([
    { id: 1, title: "Evento React", date: "2025-10-01", description: "Aprender React" },
    { id: 2, title: "Festa Nerd", date: "2025-11-15", description: "Festa com jogos e tech" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  // Atualiza os dados do formulário
  function handleChange(e) {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  }

  // Adiciona um novo evento na lista
  function handleAddEvent(e) {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) {
      alert("Título e data são obrigatórios!");
      return;
    }

        setEvents([
      ...events,
      { id: Date.now(), ...newEvent }
    ]);

    setNewEvent({ title: "", date: "", description: "" });
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Eventos</h1>

      <form onSubmit={handleAddEvent} style={{ marginBottom: 30 }}>
        <h2>Criar novo evento</h2>

        <label>
          Título: <br />
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
            placeholder="Nome do evento"
          />
        </label>

        <label>
          Data: <br />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
        </label>

        <label>
          Descrição: <br />
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
            placeholder="Detalhes do evento (opcional)"
          />
        </label>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Adicionar Evento
        </button>
      </form>

      <h2>Lista de eventos</h2>
      {events.length === 0 ? (
        <p>Nenhum evento cadastrado.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {events.map((event) => (
            <li
              key={event.id}
              style={{
                border: "1px solid #ccc",
                padding: 15,
                marginBottom: 10,
                borderRadius: 6,
              }}
            >
              <h3>{event.title}</h3>
              <p><strong>Data:</strong> {event.date}</p>
              {event.description && <p><strong>Descrição:</strong> {event.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}