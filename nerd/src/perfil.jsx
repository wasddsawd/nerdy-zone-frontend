import React from "react";
import styles from '../perfil.module.css';

export default function Perfil() {
  return (
    <div className={styles.perfil_container}>
      <header className={styles.header}>
        <h1 className={styles.perfil_title}>Meu Perfil</h1>
        <button className={styles.btn_edit}>Editar</button>
      </header>

      <section className={styles.perfil_info}>
        <img src="" alt="Foto do usuário" className={styles.perfil_img} />
        <div className={styles.perfil_texto}>
          <h2 className={styles.perfil_nome}>Nome do Usuário</h2>
          <p className={styles.perfil_email}>email@exemplo.com</p>
          <p className={styles.perfil_bio}>Descrição curta ou bio do usuário</p>
        </div>
      </section>

      <section className={styles.perfil_detalhes}>
        <h3 className={styles.subtitulo}>Informações</h3>
        <ul className={styles.info_lista}>
          <li>
            <span className={styles.info_label}>Idade:</span> 25 anos
          </li>
          <li>
            <span className={styles.info_label}>Cidade:</span> Pato Branco _ PR
          </li>
          <li>
            <span className={styles.info_label}>Profissão:</span> Desenvolvedor
          </li>
        </ul>
      </section>

      <section className={styles.perfil_extra}>
        <div className={styles.extra_item}>
          <h3 className={styles.subtitulo}>Eventos participados</h3>
          <p>Lista dos eventos participaos</p>
        </div>
      </section>
    </div>
  );
}
