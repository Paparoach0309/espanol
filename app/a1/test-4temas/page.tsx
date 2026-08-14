import Link from "next/link";
import Quiz from "../../../components/a1/Quiz";
import { test4temas } from "../../../data/a1/test4temas";
import styles from "../a1.module.css";

export default function Test4Temas() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>📝 Тест по 4 темам</h1>
        <p className={styles.intro}>
          10 заданий по темам: существительное, прилагательное, артикли и личные
          местоимения.
        </p>
      </header>

      <div style={{ marginBottom: 16 }}>
        <Quiz questions={test4temas} title="Тест по 4 темам" />
      </div>
    </div>
  );
}