import React, { useState } from "react";
import { Button_pra_login } from "../components/layouts/Button_login";
import { Input_pra_login } from "../components/layouts/Input";
import styles from "../styles/cadastro.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cadastro() {
  const location = useLocation();

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Username, setUsername] = useState("");

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
        console.log(data.usuario);
      } else {
        alert(data.error || "Erro no cadastro");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro de conexão com o servidor");
    }
  };

  // quadrado troca de cor suavemente só se for para /login
  const quadradoVariants = {
    exit: (nextPath) =>
      nextPath === "/login"
        ? {
            backgroundColor: "#003569",
            transition: { duration: 0.8 },
          } // suave
        : { opacity: 0, transition: { duration: 0 } }, // some instantâneo
  };

  return (
    <div className={styles.container_principal}>
      <div className={styles.container_sub}>
        <div className={styles.container}>
          {/* Quadrado com animação condicional */}
          <motion.div
            layoutId="quadrado"
            key={location.pathname}
            initial={{ backgroundColor: "#e49e09" }}
            animate={{ backgroundColor: "#e49e09" }}
            exit="exit"
            variants={quadradoVariants}
            custom={location.pathname}
            transition={{ duration: 0.8 }} // remove delay, deixa transição suave
            className={styles.quadrado}
          ></motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1 },
            }}
            exit={{ opacity: 0, y: 100, transition: { duration: 0 } }} // some instantâneo
            className={styles.conteudo}
          >
            <h1 className={styles.title}>Cadastro</h1>
            <form className={styles.container_form} onSubmit={handleSubmit}>
              <Input_pra_login
                classe={styles.input}
                id_name="nome"
                type="text"
                placeholder="Digite seu Nickname"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
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

        {/* Pergunta */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.7 },
          }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0 } }} // some instantâneo
          className={styles.pergunta}
        >
          <p className={styles.p}>Possui uma conta?</p>
          <Link className={styles.a} to="/login">
            Entrar
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
