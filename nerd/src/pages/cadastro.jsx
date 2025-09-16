import React, { useState } from "react";
import {Button_pra_login} from "../components/layouts/Button_login";
import { Button } from "../components/ui/Button";
import {Input_pra_login} from "../components/layouts/Input";
import styles from "../styles/cadastro.module.css";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

export default function Login() {
  const variants = {
  exit: { x: "-105%",backgroundColor: "#003569", transition: { duration: 0.8, delay: 0.6 } }
}


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
          <motion.div
          key={location.pathname}
          variants={variants}
          exit="exit"
          className={styles.quadrado}></motion.div>
        <motion.div
          initial={{opacity:0, y: 100}}
          animate={{opacity:1, y: 0, transition : {duration: 1, delay: 0.5}}}
          exit={{opacity:0, y:100, transition: {duration: 0.5}}}
          
          className={styles.conteudo}>
        <h1 className={styles.title}>Cadastro</h1>
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
        </motion.div>
      </div>
      <motion.div
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y: 0, transition: {duration: 1, delay: 0.7}}}
        exit={{opacity:0, y: 100}}

        className={styles.pergunta}>
        <p className={styles.p}>Possuí uma conta?</p>
        <Link className={styles.a} to="/login">Entrar</Link>
      </motion.div>
      </div>
    </div>
  );
}
