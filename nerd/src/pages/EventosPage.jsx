import { useState } from 'react';

export default function EventosPage() {
  const [eventos, setEventos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const adicionarEvento = () => {
    if (!titulo || !data) {
      alert("Preencha o título e a data!");
      return;
    }

    const novoEvento = { titulo, data, descricao };
    setEventos([...eventos, novoEvento]);

    setTitulo('');
    setData('');
    setDescricao('');
  };

  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <a style={styles.link} href="/">Home</a>
        <a style={styles.link} href="/perfil">Perfil</a>
        <a style={styles.link} href="/login">Login</a>
        <a style={{ ...styles.link, ...styles.activeLink }} href="/eventos">Eventos</a>
      </header>

      {/* Formulário */}
      <main style={styles.main}>
        <h2 style={styles.title}>Criar novo evento</h2>

        <input
          placeholder="Nome do evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Detalhes do evento (opcional)"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={adicionarEvento} style={styles.button}>
          Adicionar Evento
        </button>

        {/* Lista de eventos */}
        <h3 style={{ marginTop: 40 }}>Lista de eventos</h3>
        {eventos.map((ev, idx) => (
          <div key={idx} style={styles.card}>
            <h3 style={{ marginBottom: 5 }}>{ev.titulo}</h3>
            <p><strong>Data:</strong> {ev.data}</p>
            <p><strong>Descrição:</strong> {ev.descricao || "Sem descrição"}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #0077ff, #002244)',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#001f3f',
    padding: '1rem',
    borderBottom: '2px solid #00b4ff',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    transition: '0.3s',
  },
  activeLink: {
    textShadow: '0 0 8px #00b4ff',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    margin: '2rem auto',
    padding: '0 1rem',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  input: {
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
  },
  textarea: {
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#00b4ff',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};
