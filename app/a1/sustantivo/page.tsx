import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  sustantivoRules,
  sustantivoExamples,
  sustantivoExercises,
  sustantivoQuiz,
} from "../../../data/a1/sustantivo";
import styles from "../a1.module.css";

export default function Sustantivo() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🏠 Имя существительное (род)</h1>
        <p className={styles.intro}>
          Правило, примеры предложений в мужском и женском роде, упражнение и
          тест на 9 заданий.
        </p>
      </header>

      <RuleBlock rules={sustantivoRules} />

      <ExamplesBlock examples={sustantivoExamples} title="💬 Примеры: предложения в мужском и женском роде" />

      <ExerciseList exercises={sustantivoExercises} title="✏️ Упражнение" />

      <section className={styles.section}>
        <h2>🧪 Тест (9 заданий)</h2>
        <p>Ответь на 9 вопросов о роде существительных.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz questions={sustantivoQuiz} title="Тест: род существительных" />
        </div>
      </section>
    </div>
  );
}