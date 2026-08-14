import Link from "next/link";
import styles from "./a1.module.css";

const MODULES = [
  {
    href: "/a1/sustantivo",
    emoji: "🏠",
    title: "Имя существительное (род)",
    desc: "Правило, примеры (мужской и женский род), упражнение и тест на 9 заданий.",
  },
  {
    href: "/a1/adjetivo",
    emoji: "🎨",
    title: "Имя прилагательное",
    desc: "Согласование по роду и числу, примеры, упражнение и тест на 9 заданий.",
  },
  {
    href: "/a1/articulos",
    emoji: "📦",
    title: "Артикли (el / la / un / una)",
    desc: "Правила, исключения, примеры и 9 упражнений.",
  },
  {
    href: "/a1/pronombres",
    emoji: "👤",
    title: "Личные местоимения",
    desc: "yo, tú, él, ella, nosotros… Правило и упражнение.",
  },
  {
    href: "/a1/test-4temas",
    emoji: "📝",
    title: "Тест по 4 темам",
    desc: "Существительное, прилагательное, артикли и местоимения.",
  },
  {
    href: "/a1/preposiciones",
    emoji: "🧭",
    title: "Простые предлоги",
    desc: "a, de, en, con, sin, por, para… Правило, примеры, упражнения и тест на 10 заданий.",
  },
  {
    href: "/a1/ser-estar",
    emoji: "⚖️",
    title: "Глагол ser / estar",
    desc: "Правила употребления, примеры, упражнения и тест на 9 заданий.",
  },
  {
    href: "/a1/test-final",
    emoji: "🏁",
    title: "Итоговый тест по всем темам",
    desc: "10 заданий: существительные, прилагательные, артикли, местоимения, предлоги, ser/estar.",
  },
];

export default function A1Index() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>🟢 Nivel A1 — Español básico</h1>
        <p className={styles.intro}>
          Базовая грамматика испанского языка: теория, примеры, упражнения и
          тесты по каждому разделу.
        </p>
      </header>

      <div className={styles.grid}>
        {MODULES.map((m) => (
          <Link key={m.href} href={m.href} className={styles.gridCard}>
            <div className={styles.gridEmoji}>{m.emoji}</div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </Link>
        ))}
      </div>

      <div className={styles.gameNote}>
        <p>
          🧩 Бонус: попробуй игру{" "}
          <Link href="/juego">«Собери предложение»</Link> — базовые фразы уровня
          A1.
        </p>
      </div>
    </div>
  );
}