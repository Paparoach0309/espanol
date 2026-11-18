import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import Quiz from "../../../components/a1/Quiz";
import {
  verbosPresenteRules,
  verbosPresenteExamples,
  verbosPresenteExercises,
  verbosPresenteQuiz,
} from "../../../data/a1/verbosPresente";
import styles from "../a1.module.css";

export default function VerbosPresente() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>🔄 Спряжение в настоящем: querer, poder, venir, decir</h1>
        <p className={styles.intro}>
          Глаголы с чередованием в Presente de Indicativo: правила, примеры,
          упражнения и тест на 10 заданий.
        </p>
      </header>

      <RuleBlock rules={verbosPresenteRules} />

      <ExamplesBlock examples={verbosPresenteExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={verbosPresenteExercises}
        title="✏️ Упражнения: поставь глагол в нужную форму"
      />

      <section className={styles.section}>
        <h2>🧪 Тест (10 заданий)</h2>
        <p>Выбери правильную форму глагола в настоящем времени.</p>
        <div style={{ marginTop: 14 }}>
          <Quiz
            questions={verbosPresenteQuiz}
            title="Тест: querer, poder, venir, decir"
          />
        </div>
      </section>
    </div>
  );
}
