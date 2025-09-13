import React, { useState } from "react";
import {Button_pra_login} from "../components/layouts/Button_login";
import { Button } from "../components/ui/Button";
import {Input_pra_login} from "../components/layouts/Input";
import styles from "../styles/login.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);
  };

  return (
    <motion.div className={styles.container_principal}
        initial={{position:"fixed"}}
        exit={{position:"absolute"}}>
      <div className={styles.container_sub}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.container_form} onSubmit={handleSubmit}>
          <Input_pra_login
            classe={styles.input}
            id_name="email"
            type="email"
            placeholder="Digite seu email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input_pra_login
            classe={styles.input}
            id_name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button_pra_login type="submit">Entrar</Button_pra_login>
        </form>
      </div>
      <motion.div className={styles.pergunta}
      initial={{transition:{delay: 3}, y: 100, opacity: 0, zIndex: 1}}
      animate={{y: 0, opacity: 1,}}
      exit={{y: 100, opacity: 0, zIndex: 2}}
      transition={{ duration: 1}}>
        <p className={styles.p}>Não possui uma conta?</p>
        <Link className={styles.a} to="/cadastro">Cadastre-se</Link>
      </motion.div>
      </div>
    </motion.div>
  );
}
