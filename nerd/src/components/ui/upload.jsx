import React, { useState, useEffect } from "react";
import mais from "../../assets/mais.svg"
import styles from "../../styles/perfil.module.css"

export default function UploadFotoPerfil() {
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagem(file);
  };

  useEffect(() => {
    if (!imagem) return;

    const uploadImagem = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("imagem", imagem);

        const response = await fetch("https://nerdyzone.onrender.com/foto", {
          method: "PATCH", // ALTERAÇÃO: PATCH em vez de POST
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Erro ao enviar imagem");
        }

        console.log("Foto atualizada com sucesso!");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    uploadImagem();
  }, [imagem]);

  return (
    <div>
        <label className={styles.viado} htmlFor="upload"><img src={mais} alt="image" className={styles.mais}/></label>
      <input className={styles.upload} id="upload" type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
}