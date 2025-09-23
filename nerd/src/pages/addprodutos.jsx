import React, { useState } from 'react'
import styles from '../styles/addprodutos.module.css'

export default function AddProduct({ onAddProduct, editingProduct, onUpdateProduct }) {
  const [formData, setFormData] = useState(
    editingProduct || { name: '', price: '', description: '', image: '' }
  )
  const [preview, setPreview] = useState(editingProduct?.image || null)

  // Atualiza os inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Upload da imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }))
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Submissão
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.price) {
      alert('Preencha pelo menos o nome e o preço!')
      return
    }

    if (editingProduct) {
      onUpdateProduct(formData)
    } else {
      onAddProduct({ ...formData, id: Date.now() })
    }

    // Reset
    setFormData({ name: '', price: '', description: '', image: '' })
    setPreview(null)
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        {editingProduct ? 'Editar Produto' : 'Adicionar Produto'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Preço (R$)"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Upload de imagem */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded mt-2 border" />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {editingProduct ? 'Salvar Alterações' : 'Adicionar'}
        </button>
      </form>
    </div>
  )
}
