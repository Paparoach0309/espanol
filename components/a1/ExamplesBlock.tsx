import { A1Example } from "../../data/a1/types";
import styles from "../../app/a1/a1.module.css";

export default function ExamplesBlock({
  examples,
  title = "📌 Примеры",
}: {
  examples: A1Example[];
  title?: string;
}) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {examples.map((ex, i) => (
        <div key={i} className={styles.example}>
          <div className={styles.es}>{ex.es}</div>
          <div className={styles.ru}>{ex.ru}</div>
        </div>
      ))}
    </section>
  );
}