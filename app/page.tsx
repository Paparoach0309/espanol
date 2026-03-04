"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { withAuth } from "./hoc/withAuth";

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Domina el Subjuntivo — Nivel B1</h1>
        <p>
          Aprende a usar el subjuntivo con seguridad en situaciones reales:
          opiniones, emociones, hipótesis y estructuras complejas.
        </p>

        <div className={styles.buttons}>
          <Link href="/explicacion" className={styles.primary}>
            Empezar teoría
          </Link>
          <Link href="/ejercicios" className={styles.secondary}>
            Practicar ahora
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div>
          <h3>📚 Explicación clara</h3>
          <p>Teoría estructurada con ejemplos reales de uso.</p>
        </div>

        <div>
          <h3>🧠 Formación paso a paso</h3>
          <p>Aprende cómo se forma y domina los verbos irregulares.</p>
        </div>

        <div>
          <h3>🎯 30+ ejercicios B1</h3>
          <p>Practica con situaciones reales del nivel intermedio.</p>
        </div>
      </section>
    </main>
  );
}

export default withAuth(Home);
