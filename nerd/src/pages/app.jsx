import React, { useState, useEffect } from 'react'
import AddProduct from './AddProduct'

export default function App() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  // Carrega do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('products')
    if (saved) {
      setProducts(JSON.parse(saved))
    }
  }, [])

  // Salva no localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  // Adicionar novo
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct])
  }

  // Excluir produto
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  // Editar produto
  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  // Salvar alterações
  const handleUpdateProduct = (updated) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
    setEditingProduct(null)
  }

  return (
    <div className="p-6">
      <AddProduct
        onAddProduct={handleAddProduct}
        editingProduct={editingProduct}
        onUpdateProduct={handleUpdateProduct}
      />

      <h2 className="text-xl font-bold mt-6">Produtos adicionados:</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((p) => (
          <div key={p.id} className="border p-3 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>Preço: R$ {p.price}</p>
            <p>{p.description}</p>
            {p.image && (
              <img src={p.image} alt={p.name} className="w-32 h-32 object-cover rounded mt-2" />
            )}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
