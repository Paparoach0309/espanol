import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  adjetivoRules,
  adjetivoExamples,
  adjetivoExercises,
  adjetivoQuiz,
} from "../../../data/a1/adjetivo";
import styles from "../a1.module.css";

export default function Adjetivo() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🎨 Имя прилагательное</h1>
        <p className={styles.intro}>
          Согласование прилагательных с существительными по роду и числу,
          примеры, упражнение и тест на 9 заданий.
        </p>
      </header>

      <RuleBlock rules={adjetivoRules} />

      <ExamplesBlock examples={adjetivoExamples} title="💬 Примеры" />

      <ExerciseList exercises={adjetivoExercises} title="✏️ Упражнение" />

      <section className={styles.section}>
        <h2>🧪 Тест (9 заданий)</h2>
        <p>Ответь на 9 вопросов о прилагательных.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz questions={adjetivoQuiz} title="Тест: прилагательные" />
        </div>
      </section>
    </div>
  );
}