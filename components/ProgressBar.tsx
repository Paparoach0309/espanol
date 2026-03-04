"use client";
import { useSubjuntivo } from "../context/SubjuntivoContext";
import styles from "../app/ejercicios/ejercicios.module.css";

export default function ProgressBar() {
  const { completed, total } = useSubjuntivo();
  const percent = (completed / total) * 100;

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar} style={{ width: `${percent}%` }} />
    </div>
  );
}
