import React, { useState } from "react";

export default function UploadFotoPerfil() {
  const [preview, setPreview] = useState(null); // preview local
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview local antes de enviar
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("link", file);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      const response = await fetch("https://nerdyzone.onrender.com/perfil/foto", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Upload feito com sucesso:", data);
        // Se o backend retorna a URL, atualiza o preview definitivo:
        if (data.perfil?.link) setPreview(data.perfil.link);
      } else {
        console.error("Erro no upload:", data.error);
        alert("Erro no upload: " + (data.error || "desconhecido"));
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro ao conectar com o servidor");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p>Enviando imagem...</p>}
    </div>
  );
}