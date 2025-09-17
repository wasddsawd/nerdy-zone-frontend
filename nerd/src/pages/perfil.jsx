import React, { useState, useEffect } from "react";
import styles from '../styles/perfil.module.css';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar dados do usuário
  const fetchUsuario = async () => {
    try {
      const response = await fetch("https://nerdyzone.onrender.com/perfil"); // substitua pela rota real
      if (!response.ok) throw new Error("Erro ao buscar usuário");
      const data = await response.json();
      setUsuario(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className={styles.profilepagecontainer}>
      <main className={styles.profilecontent}>
        <section className={styles.profileinfosection}>
          <div className={styles.profileheader}>
            <div className={styles.profilepicturecontainer}>
              <div className={styles.profilepicture}></div>
            </div>
            <div className={styles.profiledetails}>
              <p className={styles.profilename}>Nome:{usuario.username}</p>
              <p className={styles.profileemail}>Email:{usuario.email}</p>
              <p className={styles.profilecontact}>Tipo:{usuario.tipo_user}</p>
            </div>
          </div>

          <div className={styles.aboutsection}>
            <h2 className={styles.sectiontitle}>Sobre</h2>
            <div className={styles.aboutcontent}>
              <p>Aqui você pode adicionar informações sobre você, sua experiência profissional, interesses e qualquer outra informação relevante que gostaria de compartilhar.</p>
            </div>
          </div>

          <div className={styles.blogsection}>
            <h2 className={styles.sectiontitle}>Blog</h2>
            <div className={styles.blogcontent}>
              <p>Esta seção pode conter seus artigos, pensamentos, experiências ou qualquer conteúdo que você gostaria de compartilhar através do seu blog pessoal.</p>
            </div>
          </div>
        </section>

        <aside className={styles.eventssection}>
          <h2 className={styles.sectiontitle}>Eventos Participados</h2>
          <div className={styles.eventlist}>
            {[...Array(4)].map((_, idx) => (
              <div className={styles.eventcard} key={idx}>
                <div className={styles.eventimageplaceholder}>
                  <span className={styles.placeholdertext}>Fotos do evento</span>
                </div>
                <p className={styles.eventdescription}>sobre o evento</p>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
