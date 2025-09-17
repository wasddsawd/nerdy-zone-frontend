import React, { useState, useRef, useEffect } from "react";
import { Button_pra_login } from "../components/layouts/Button_login";
import { Input_pra_login } from "../components/layouts/Input";
import styles from "../styles/login.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const location = useLocation();
  const prevPath = useRef(null);

  // Guarda o path anterior
  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location]);

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);
  };

  const variants = {
    exit: () => {
      if (prevPath.current === "/login" && location.pathname === "/cadastro") {
        return {
          backgroundColor: "#e49e09",
          x: "-100%",
          transition: { duration: 0.8 },
        };
      }
      return {}; // não aplica nenhuma animação
    },
  };

  return (
    <motion.div
      className={styles.container_principal}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit="exit"
      variants={variants}
    >
      <div className={styles.container_sub}>
        <div className={styles.container}>
          <motion.div
            layoutId="quadrado"
            transition={{ duration: 1 }}
            className={styles.quadrado}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: 100, transition: { duration: 1.5 } }}
            className={styles.conteudo}
          >
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.7 },
          }}
          exit={{ opacity: 0, y: 100 }}
          className={styles.pergunta}
        >
          <p className={styles.p}>Não possui uma conta?</p>
          <Link className={styles.a} to="/cadastro">
            Cadastre-se
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
