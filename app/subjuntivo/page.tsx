import Link from "next/link";
import styles from "./subjuntivo.module.css";

const MODULES = [
  {
    href: "/subjuntivo/explicacion",
    emoji: "📚",
    title: "Explicación",
    desc: "Что такое subjuntivo, как он образуется и когда используется.",
  },
  {
    href: "/subjuntivo/formacion",
    emoji: "🧠",
    title: "Formación",
    desc: "Пошаговое образование Presente de Subjuntivo и нерегулярные глаголы.",
  },
  {
    href: "/subjuntivo/ejercicios",
    emoji: "🎯",
    title: "Ejercicios",
    desc: "30+ упражнений уровня B1 с проверкой ответа.",
  },
  {
    href: "/subjuntivo/test",
    emoji: "⏱️",
    title: "Test",
    desc: "Симулякр DELE B1: 10 заданий на время.",
  },
];

export default function SubjuntivoIndex() {
  return (
    <div className={styles.container}>
      <h1>🔵 Subjuntivo — Nivel B1</h1>
      <p className={styles.subtitle}>
        Уверенное использование сослагательного наклонения: желания, эмоции,
        сомнения, гипотезы.
      </p>

      <div className={styles.grid}>
        {MODULES.map((m) => (
          <Link key={m.href} href={m.href} className={styles.card}>
            <div className={styles.emoji}>{m.emoji}</div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}