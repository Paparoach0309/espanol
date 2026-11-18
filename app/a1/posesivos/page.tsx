import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  posesivosRules,
  posesivosExamples,
  posesivosExercises,
  posesivosQuiz,
} from "../../../data/a1/posesivos";
import styles from "../a1.module.css";

export default function Posesivos() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🔑 Притяжательные местоимения</h1>
        <p className={styles.intro}>
          mi, tu, su, nuestro… и полные формы mío, tuyo, suyo: правила, примеры,
          упражнения и тест на 10 заданий.
        </p>
      </header>

      <RuleBlock rules={posesivosRules} />

      <ExamplesBlock examples={posesivosExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={posesivosExercises}
        title="✏️ Упражнения: вставь притяжательное местоимение"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери правильную форму притяжательного местоимения.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz questions={posesivosQuiz} title="Тест: posesivos" />
        </div>
      </section>
    </div>
  );
}
