import { useState } from "react";
import { Button } from "../components/ui/Button";
import styles from "../styles/Criareventos.module.css";

export default function Criareventos() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    data: "",
    horarioInicio: "",
    horarioTermino: "",
    local: "",
    vagas: "",
    categoria: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do evento:", formData);
  };

  const handleCancel = () => {
    setFormData({
      titulo: "",
      descricao: "",
      data: "",
      horarioInicio: "",
      horarioTermino: "",
      local: "",
      vagas: "",
      categoria: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagetitle}>
        <h1>Criar eventos</h1>
      </div>

      <main className={styles.maincontent}>
        <form onSubmit={handleSubmit} className={styles.eventform}>
          <div className={styles.formgroup}>
            <label htmlFor="titulo">Título do Evento</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              className={styles.forminput}
              placeholder="Label"
            />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              className={styles.formtextarea}
              placeholder="Label"
              rows={6}
            />
          </div>

          <div className={styles.formrow}>
            <div className={styles.formgroup}>
              <label htmlFor="data">Data (obrig)</label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="horarioInicio">Horário início (obrig)</label>
              <input
                type="time"
                id="horarioInicio"
                name="horarioInicio"
                value={formData.horarioInicio}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="horarioTermino">Horário término (obrig)</label>
              <input
                type="time"
                id="horarioTermino"
                name="horarioTermino"
                value={formData.horarioTermino}
                onChange={handleInputChange}
                className={styles.forminput}
              />
            </div>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="local">Local do evento</label>
            <input
              type="text"
              id="local"
              name="local"
              value={formData.local}
              onChange={handleInputChange}
              className={styles.forminput}
              placeholder="Label"
            />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="vagas">Vagas</label>
            <input
              type="number"
              id="vagas"
              name="vagas"
              value={formData.vagas}
              onChange={handleInputChange}
              className={styles.forminput}
              placeholder="Label"
            />
          </div>

          <div className={styles.formgroup}>
            <label>Categoria</label>
            <div className={styles.categoryoptions}>
              <label className={styles.radiooption}>
                <input
                  type="radio"
                  name="categoria"
                  value="Anime"
                  checked={formData.categoria === "Anime"}
                  onChange={handleInputChange}
                />
                <span>Anime</span>
              </label>
              <label className={styles.radiooption}>
                <input
                  type="radio"
                  name="categoria"
                  value="Games"
                  checked={formData.categoria === "Games"}
                  onChange={handleInputChange}
                />
                <span>Games</span>
              </label>
              <label className={styles.radiooption}>
                <input
                  type="radio"
                  name="categoria"
                  value="HQs"
                  checked={formData.categoria === "HQs"}
                  onChange={handleInputChange}
                />
                <span>HQs</span>
              </label>
              <label className={styles.radiooption}>
                <input
                  type="radio"
                  name="categoria"
                  value="Cosplay"
                  checked={formData.categoria === "Cosplay"}
                  onChange={handleInputChange}
                />
                <span>Cosplay</span>
              </label>
              <label className={styles.radiooption}>
                <input
                  type="radio"
                  name="categoria"
                  value="Tecnologia"
                  checked={formData.categoria === "Tecnologia"}
                  onChange={handleInputChange}
                />
                <span>Tecnologia</span>
              </label>
            </div>
          </div>

          <div className={styles.formactions}>
            <button
              type="button"
              onClick={handleCancel}
              className={styles.btncancel}
            >
              Cancelar
            </button>
            <button type="submit" className={styles.btnsubmit}>
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
