"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { withAuth } from "./hoc/withAuth";

function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Aprende Español</h1>
        <p>
          Выберите свой уровень: начните с базовой грамматики уровня A1 или
          переходите к уверенному использованию Subjuntivo уровня B1.
        </p>

        <div className={styles.buttons}>
          <Link href="/a1" className={styles.primary}>
            🟢 Nivel A1
          </Link>
          <Link href="/subjuntivo" className={styles.secondary}>
            🔵 Subjuntivo B1
          </Link>
        </div>
      </section>

      <section className={styles.sections}>
        <Link href="/a1" className={styles.sectionCard}>
          <h3>🟢 Уровень A1 — Español básico</h3>
          <p>
            Существительные и род, прилагательные, артикли, личные местоимения,
            предлоги, глагол ser/estar и итоговые тесты.
          </p>
        </Link>

        <Link href="/subjuntivo" className={styles.sectionCard}>
          <h3>🔵 Уровень B1 — Subjuntivo</h3>
          <p>
            Теория, образование форм, 30+ упражнений и тест-симулякр по
            субхунтиво.
          </p>
        </Link>

        <Link href="/juego" className={styles.sectionCard}>
          <h3>🧩 Игра «Собери предложение»</h3>
          <p>
            Начальные предложения: собери слова в правильном порядке перетаскиванием.
          </p>
        </Link>
      </section>
    </main>
  );
}

export default withAuth(Home);