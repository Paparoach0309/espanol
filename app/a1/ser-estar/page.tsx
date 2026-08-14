import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  serEstarRules,
  serEstarExamples,
  serEstarExercises,
  serEstarQuiz,
} from "../../../data/a1/serEstar";
import styles from "../a1.module.css";

export default function SerEstar() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>⚖️ Глагол ser / estar</h1>
        <p className={styles.intro}>
          Правила употребления, примеры, упражнения и тест на 9 заданий.
        </p>
      </header>

      <RuleBlock rules={serEstarRules} />

      <ExamplesBlock examples={serEstarExamples} title="💬 Примеры" />

      <ExerciseList exercises={serEstarExercises} title="✏️ Упражнения: ser или estar" />

      <section className={styles.section}>
        <h2>🧪 Тест (9 заданий)</h2>
        <p>Выбери правильный глагол: ser или estar.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz questions={serEstarQuiz} title="Тест: ser / estar" />
        </div>
      </section>
    </div>
  );
}