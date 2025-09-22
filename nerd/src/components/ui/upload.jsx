import React, { useState } from "react";

export default function UploadFoto() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Escolha um arquivo");

    const formData = new FormData();
    formData.append("imagem", file);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://nerdyzone.onrender.com/perfil/foto", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro no upload");

      console.log("Sucesso:", data);
    } catch (err) {
      console.error(err);
      alert(err.message || "Falha no upload");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
}