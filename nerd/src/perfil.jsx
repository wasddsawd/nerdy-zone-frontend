import React from "react";
import './perfil.module.css';

export default function Perfil() {
  return (
    <div className="perfil-container">
      <header className="header">
        <h1 className="perfil-title">Meu Perfil</h1>
        <button className="btn-edit">Editar</button>
      </header>

      <section className="perfil-info">
        <img
          src=""
          alt="Foto do usuário"
          className="perfil-img"
        />
        <div className="perfil-texto">
          <h2 className="perfil-nome">Nome do Usuário</h2>
          <p className="perfil-email">email@exemplo.com</p>
          <p className="perfil-bio">Descrição curta ou bio do usuário</p>
        </div>
      </section>

      <section className="perfil-detalhes">
        <h3 className="subtitulo">Informações</h3>
        <ul className="info-lista">
          <li><span className="info-label">Idade:</span> 25 anos</li>
          <li><span className="info-label">Cidade:</span> Pato Branco - PR</li>
          <li><span className="info-label">Profissão:</span> Desenvolvedor</li>
        </ul>
      </section>

      <section className="perfil-extra">
        <div className="extra-item">
          <h3 className="subtitulo">Eventos participados</h3>
          <p>Lista dos eventos participaos</p>
        </div>
      </section>
    </div>
  );
}
