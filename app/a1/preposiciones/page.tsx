import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  preposicionesRules,
  preposicionesExamples,
  preposicionesExercises,
  preposicionesQuiz,
} from "../../../data/a1/preposiciones";
import styles from "../a1.module.css";

export default function Preposiciones() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🧭 Простые предлоги</h1>
        <p className={styles.intro}>
          Правило, примеры, упражнения и тест на 10 заданий.
        </p>
      </header>

      <RuleBlock rules={preposicionesRules} />

      <ExamplesBlock examples={preposicionesExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={preposicionesExercises}
        title="✏️ Упражнения: вставь предлог"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери правильный предлог в каждом предложении.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz questions={preposicionesQuiz} title="Тест: предлоги" />
        </div>
      </section>
    </div>
  );
}