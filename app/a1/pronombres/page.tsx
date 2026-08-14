import Link from "next/link";
import RuleBlock from "../../../components/a1/RuleBlock";
import ExamplesBlock from "../../../components/a1/ExamplesBlock";
import ExerciseList from "../../../components/a1/ExerciseList";
import {
  pronombresRules,
  pronombresExamples,
  pronombresExercises,
} from "../../../data/a1/pronombres";
import styles from "../a1.module.css";

export default function Pronombres() {
  return (
    <div className={styles.page}>
      <Link href="/a1" className={styles.backLink}>
        ← Назад к Nivel A1
      </Link>

      <header className={styles.header}>
        <h1>👤 Личные местоимения</h1>
        <p className={styles.intro}>
          Правило и упражнения на личные местоимения в роли подлежащего.
        </p>
      </header>

      <RuleBlock rules={pronombresRules} />

      <ExamplesBlock examples={pronombresExamples} title="💬 Примеры" />

      <ExerciseList exercises={pronombresExercises} title="✏️ Упражнение" />
    </div>
  );
}