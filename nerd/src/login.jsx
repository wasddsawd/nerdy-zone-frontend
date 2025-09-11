
import React from "react";
import "./styles/login.module.css";

export default function Login() {
  return (
    <div className="">
      <header className="">
        <h1 className="">Meu Perfil</h1>
        <button className="">
          Editar
        </button>
      </header>
      <section className="">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de Perfil"
          className=""
        />
        <div className="">
          <h2 className="">Nome do Usuário</h2>
          <p className="">email@exemplo.com</p>
          <p className="">Descrição curta ou bio do usuário</p>
        </div>
      </section>
      <section className="w-full max-w-4xl bg-white mt-6 shadow-md rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações</h3>
        <ul className="space-y-2">
          <li><span className="font-medium">Idade:</span> 25 anos</li>
          <li><span className="font-medium">Cidade:</span> Pato Branco - PR</li>
          <li><span className="font-medium">Profissão:</span> Desenvolvedor</li>
        </ul>
      </section>
      <section className="w-full max-w-4xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Projetos</h3>
          <p className="text-gray-600">Lista ou resumo dos projetos...</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Conquistas</h3>
          <p className="text-gray-600">Medalhas, badges ou reconhecimentos...</p>
        </div>
      </section>
    </div>
  );
}
