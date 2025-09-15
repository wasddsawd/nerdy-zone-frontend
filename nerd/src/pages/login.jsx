import React, { useState } from "react";
import {Button_pra_login} from "../components/layouts/Button_login";
import { Button } from "../components/ui/Button";
import {Input_pra_login} from "../components/layouts/Input";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);
  };

  return (
    <div className={styles.container_principal}>
      <div className={styles.container_sub}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.container_form} onSubmit={handleSubmit}>
          <Input_pra_login
          id_name="email"
            type="email"
            placeholder="Digite seu email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input_pra_login
          id_name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button_pra_login type="submit">Entrar</Button_pra_login>
        </form>
      </div>
      <div className={styles.pergunta}>
        <p className={styles.p}>Não possui uma conta?</p>
        <Link className={styles.a} to="/cadastro">Cadastre-se</Link>
      </div>
      </div>
    </div>
  );
}
