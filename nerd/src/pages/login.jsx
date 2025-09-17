import React, { useState } from "react";
import { Button_pra_login } from "../components/layouts/Button_login";
import { Input_pra_login } from "../components/layouts/Input";
import styles from "../styles/login.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", Email, "Senha:", Senha);
    try {
      const response = await fetch("https://nerdyzone.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          senha: Senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Bem vindo!", {
          className: "bg-card text-card-foreground border-border",
        });
        console.log(data.usuario);
        navigate("/");
      } else {
        toast.error(data.error || "Erro no login", {
          className: "bg-card text-card-foreground border-border",
        });
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro de conexão com o servidor", {
        className: "bg-card text-card-foreground border-border",
      });
    }
  };

  // Quadrado: muda suavemente de cor somente se for para /cadastro
  const quadradoVariants = {
    exit: (nextPath) =>
      nextPath === "/cadastro"
        ? { backgroundColor: "#e49e09", transition: { duration: 0.8 } } // suave
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
            initial={{ backgroundColor: "#003569" }}
            animate={{ backgroundColor: "#003569" }}
            exit="exit"
            variants={quadradoVariants}
            custom={location.pathname}
            transition={{ duration: 0.8 }}
            className={styles.quadrado}
          ></motion.div>

          {/* Conteúdo */}
          <motion.div
            className={styles.conteudo}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1 },
            }}
            exit={{ opacity: 0, y: 100, transition: { duration: 0 } }} // some instantâneo
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

        {/* Pergunta */}
        <motion.div
          className={styles.pergunta}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.7 },
          }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0 } }} // some instantâneo
        >
          <p className={styles.p}>Não possui uma conta?</p>
          <Link className={styles.a} to="/cadastro">
            Cadastre-se
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
