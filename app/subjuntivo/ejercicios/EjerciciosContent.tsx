"use client";

import { exercises } from "../../data/exercises";
import { useSubjuntivo } from "../../context/SubjuntivoContext";
import ProgressBar from "../../components/ProgressBar";
import styles from "./ejercicios.module.css";
import ExerciseCard from "@/components/ExerciseCard";

export default function EjerciciosContent() {
  const { score, completed, reset } = useSubjuntivo();

  return (
    <div className={styles.container}>
      <h2>Entrenamiento B1 — Subjuntivo</h2>

      <ProgressBar />

      <div className={styles.stats}>
        <p>
          Progreso: {completed}/{exercises.length}
        </p>
        <p>Puntuación correcta: {score}</p>
        <button onClick={reset}>Reiniciar</button>
      </div>

      {exercises.map((ex) => (
        <ExerciseCard
          key={ex.id}
          id={ex.id}
          question={ex.question}
          correct={ex.correct}
        />
      ))}
    </div>
  );
}
