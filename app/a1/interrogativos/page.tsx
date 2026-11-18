import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  interrogativosRules,
  interrogativosExamples,
  interrogativosExercises,
  interrogativosQuiz,
} from "../../../data/a1/interrogativos";
import styles from "../a1.module.css";

export default function Interrogativos() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>❓ Вопросительные предложения</h1>
        <p className={styles.intro}>
          qué, quién, dónde, cuándo, cómo, cuánto, por qué: структура вопроса,
          правила, примеры, упражнения и тест на 10 заданий.
        </p>
      </header>

      <RuleBlock rules={interrogativosRules} />

      <ExamplesBlock examples={interrogativosExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={interrogativosExercises}
        title="✏️ Упражнения: вставь вопросительное слово"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери подходящее вопросительное слово.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz
            questions={interrogativosQuiz}
            title="Тест: вопросительные предложения"
          />
        </div>
      </section>
    </div>
  );
}
