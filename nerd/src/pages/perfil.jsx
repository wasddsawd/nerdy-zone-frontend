import React, { useState, useEffect } from "react";
import styles from "../styles/perfil.module.css";
import Upload from "../components/ui/upload";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState(null);

  // Busca dados do usuário
  const fetchUsuario = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://nerdyzone.onrender.com/perfil", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401)
        throw new Error("Não autorizado. Faça login.");
      if (!response.ok) throw new Error("Erro ao buscar usuário");

      const data = await response.json();
      setUsuario(data.perfil);

      // Busca a foto do perfil
      const fotoRes = await fetch("https://nerdyzone.onrender.com/foto", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (fotoRes.ok) {
        const fotoData = await fotoRes.json();
        setFoto(fotoData.url); // assume { link: "url_da_imagem" }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  return (
    <div className={styles.profilepagecontainer}>
      <main className={styles.profilecontent}>
        <section className={styles.profileinfosection}>
          <div className={styles.profileheader}>
            <div className={styles.profilepicturecontainer}>
              <div className={styles.profilepicture}>
                {foto ? (
                  <img className={styles.fotin} src={foto} alt="Foto de perfil" style={{ width: 100, height: 100, borderRadius: '50%' }}/>
                ) : (
                  <div className={styles.viado}>Sem foto</div>
                )}
                <Upload />
              </div>
            </div>

            <div className={styles.profiledetails}>
              <p className={styles.profilename}>
                Nome: {usuario ? usuario.username : "Carregando..."}
              </p>
              <p className={styles.profileemail}>
                Email: {usuario ? usuario.email : "Carregando..."}
              </p>
              <p className={styles.profilecontact}>
                Tipo: {usuario ? usuario.tipo_user : "Carregando..."}
              </p>
            </div>
          </div>

          <div className={styles.aboutsection}>
            <h2 className={styles.sectiontitle}>Sobre</h2>
            <div className={styles.aboutcontent}>
              <p>
                Aqui você pode adicionar informações sobre você, sua experiência
                profissional, interesses e qualquer outra informação relevante
                que gostaria de compartilhar.
              </p>
            </div>
          </div>

          <div className={styles.blogsection}>
            <h2 className={styles.sectiontitle}>Blog</h2>
            <div className={styles.blogcontent}>
              <p>
                Esta seção pode conter seus artigos, pensamentos, experiências
                ou qualquer conteúdo que você gostaria de compartilhar através
                do seu blog pessoal.
              </p>
            </div>
          </div>
        </section>

        <aside className={styles.eventssection}>
          <h2 className={styles.sectiontitle}>Eventos Participados</h2>
          <div className={styles.eventlist}>
            {[...Array(4)].map((_, idx) => (
              <div className={styles.eventcard} key={idx}>
                <div className={styles.eventimageplaceholder}>
                  <span className={styles.placeholdertext}>
                    Fotos do evento
                  </span>
                </div>
                <p className={styles.eventdescription}>sobre o evento</p>
              </div>
            ))}
          </div>
        </aside>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </main>
    </div>
  );
}
