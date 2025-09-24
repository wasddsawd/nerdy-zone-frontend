import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Line = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <button
        onClick={handleClick}
        style={{ marginBottom: 20, padding: "10px 20px" }}
      >
        {active ? "Retrair Quadrado" : "Saiba Mais"}
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            key="box"
            initial={{ width: 0, height: 4 }}
            animate={{ width: "90%", height: 800 }}
            exit={{ width: 0, height: 4 }}
            transition={{
              width: { duration: 0.6, ease: "easeInOut" },
              height: { duration: 1.0, ease: "easeInOut", delay: 0.6 }, // só começa depois que a largura termina
            }}
            style={{
              border: "4px solid rgba(255, 255, 255, 1)",
              transformOrigin: "top center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{ color: "#fff", padding: 20, textAlign: "center" }}
            >
              <h2>NerdyZone</h2>
              <p>
                Olá, nós somos o NerdyZone e nosso objetivo é ajudar pessoas
                que querem participar de eventos relacionados com a comunidade geek/nerd 
                a encontrarem meios eficientes de acharem seus eventos e novos hobbies.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Line;
