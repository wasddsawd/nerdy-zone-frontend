import React, { useState } from "react";
import {Button_pra_login} from "../components/layouts/Button";
import {Input_pra_login} from "../components/layouts/Input";
import "../styles/login.module.css";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input_pra_login
          type="email"
          placeholder="Digite seu email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input_pra_login
          type="password"
          placeholder="Digite sua senha"
          value={Senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button_pra_login type="submit">Entrar</Button_pra_login>
      </form>
    </div>
  );
}
