import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import {
  articulosRules,
  articulosExamples,
  articulosExercises,
} from "../../../data/a1/articulos";
import styles from "../a1.module.css";

export default function Articulos() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>📦 Артикли: определённый и неопределённый</h1>
        <p className={styles.intro}>
          Правила, исключения, примеры и 9 упражнений на el / la / un / una.
        </p>
      </header>

      <RuleBlock rules={articulosRules} />

      <ExamplesBlock examples={articulosExamples} title="💬 Примеры" />

      <ExerciseList
        exercises={articulosExercises}
        title="✏️ 9 упражнений: вставь артикль"
      />
    </div>
  );
}