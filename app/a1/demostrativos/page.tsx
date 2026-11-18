import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  demostrativosRules,
  demostrativosExamples,
  demostrativosExercises,
  demostrativosQuiz,
} from "../../../data/a1/demostrativos";
import styles from "../a1.module.css";

export default function Demostrativos() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>👉 Указательные местоимения и наречия</h1>
        <p className={styles.intro}>
          este, ese, aquel, aquí, ahí, allí: три степени удалённости, правила,
          примеры, упражнения и тест на 10 заданий.
        </p>
      </header>

      <RuleBlock rules={demostrativosRules} />

      <ExamplesBlock examples={demostrativosExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={demostrativosExercises}
        title="✏️ Упражнения: выбери форму"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери правильное указательное слово.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz
            questions={demostrativosQuiz}
            title="Тест: указательные местоимения и наречия"
          />
        </div>
      </section>
    </div>
  );
}
