import React, { useState } from "react";
import styles from "../styles/venda.module.css";

export default function Venda() {
    const products = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        title: `Produto ${i + 1}`,
        price: `R$ ${(Math.random() * 500 + 50).toFixed(2)}`
    }));

    return (
        <div className={styles.appcontainer}>
            <header className={styles.Banner}>
                <h1>Troca e venda</h1>
            </header>
            <div className={styles.maincontent}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarbuttons}>
                        <button className={styles.sidebarbtn}>Produtos</button>
                        <button className={styles.sidebarbtn}>Vender</button>
                    </div>
                    <div className={styles.classificarsection}>
                        <h3>Classificar Itens</h3>
                        <div className={styles.filteroptions}>
                            <div className={styles.filteritem}>
                                <input type="radio" id="filter1" name="filter" />
                                <label htmlFor="filter1">Opção 1</label>
                            </div>
                            <div className={styles.filteritem}>
                                <input type="radio" id="filter2" name="filter" />
                                <label htmlFor="filter2">Opção 2</label>
                            </div>
                            <div className={styles.filteritem}>
                                <input type="radio" id="filter3" name="filter" />
                                <label htmlFor="filter3">Opção 3</label>
                            </div>
                            <div className={styles.filteritem}>
                                <input type="radio" id="filter4" name="filter" />
                                <label htmlFor="filter4">Opção 4</label>
                            </div>
                        </div>
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
    );
}
