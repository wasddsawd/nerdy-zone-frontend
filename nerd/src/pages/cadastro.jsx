import React, { useState } from "react";
import { Button_pra_login } from "../components/layouts/Button_login";
import { Button } from "../components/ui/Button";
import { Input_pra_login } from "../components/layouts/Input";
import styles from "../styles/cadastro.module.css";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

export default function Cadastro() {
  const variants = {
  exit: {backgroundColor: "#003569", transition: { duration: 1, delay: 0.6 } }
}


  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);

    try {
      const response = await fetch("https://nerdyzone.onrender.com/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          senha: Senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        console.log(data.usuario); // user_id, email, etc.
      } else {
        alert(data.error || "Erro no cadastro");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);  
      alert("Erro de conexão com o servidor");
    }
  };

  return (
    <div className={styles.container_principal}>
      <div className={styles.container_sub}>
        <div className={styles.container}>
          <motion.div
          layoutId="quadrado"
          transition={{duration: 1}}
          key={location.pathname}
          variants={variants}
          exit="exit"
          className={styles.quadrado}></motion.div>
        <motion.div
          initial={{opacity:0, y: 100}}
          animate={{opacity:1, y: 0, transition : {duration: 1, delay: 1}}}
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
