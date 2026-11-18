import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  verbosRegularesRules,
  verbosRegularesExamples,
  verbosRegularesExercises,
  verbosRegularesQuiz,
} from "../../../data/a1/verbosRegulares";
import styles from "../a1.module.css";

export default function VerbosRegulares() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🔤 Правильные глаголы + tener, ir, oír</h1>
        <p className={styles.intro}>
          Спряжение правильных глаголов (-ar, -er, -ir) в настоящем времени,
          глаголы tener, ir, oír: правила, примеры, упражнения и тест на 10
          заданий.
        </p>
      </header>

      <RuleBlock rules={verbosRegularesRules} />

      <ExamplesBlock examples={verbosRegularesExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={verbosRegularesExercises}
        title="✏️ Упражнения: вставь правильную форму"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери правильную форму глагола.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz
            questions={verbosRegularesQuiz}
            title="Тест: правильные глаголы, tener, ir, oír"
          />
        </div>
      </section>
    </div>
  );
}
