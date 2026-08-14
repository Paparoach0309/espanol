import Link from "next/link";
import Quiz from "../../../components/a1/Quiz";
import { testFinal } from "../../../data/a1/testFinal";
import styles from "../a1.module.css";

export default function TestFinal() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🏁 Итоговый тест по всем темам</h1>
        <p className={styles.intro}>
          10 заданий: существительные, прилагательные, артикли, местоимения,
          предлоги, ser / estar.
        </p>
      </header>

      <div style={{ marginBottom: 16 }}>
        <Quiz questions={testFinal} title="Итоговый тест" />
      </div>
    </div>
  );
}