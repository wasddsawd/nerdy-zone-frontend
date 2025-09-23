import React, { useState } from 'react'
import styles from '../styles/venda.module.css'
import AddProduct from './addprodutos'

export default function Venda() {
  const [mostrarAdd, setMostrarAdd] = useState(false)

  // Agora products é um estado, começa com os 8 de exemplo
  const [products, setProducts] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `Produto ${i + 1}`,
      price: `R$ ${(Math.random() * 500 + 50).toFixed(2)}`,
    }))
  )

  // Função que será chamada pelo AddProduct
  const handleAddProduct = (novoProduto) => {
    setProducts((prev) => [
      ...prev,
      { id: prev.length + 1, ...novoProduto }, // gera id novo e adiciona
    ])
    setMostrarAdd(false) // fecha o formulário após adicionar
  }

  return (
    <>
      {/* Só mostra o form se mostrarAdd === true */}
      {mostrarAdd && <AddProduct onAdd={handleAddProduct} />}

      <div className={styles.appcontainer}>
        <header className={styles.Banner}>
          <h1>Troca e venda</h1>
        </header>
        <div className={styles.maincontent}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarbuttons}>
              <button className={styles.sidebarbtn} onClick={() => setMostrarAdd(!mostrarAdd)}>
                {mostrarAdd ? 'Fechar' : 'Adicionar Produto'}
              </button>
              <button className={styles.sidebarbtn}>Vender</button>
            </div>
          </aside>

          <main className={styles.productsgrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productcard}>
                <div className={styles.productimage}></div>
                <div className={styles.productinfo}>
                  <h4>{product.title}</h4>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  )
}
