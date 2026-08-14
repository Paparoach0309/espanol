"use client";

import { useState } from "react";
import { A1Exercise } from "../../data/a1/types";
import { normalize } from "../../lib/normalize";
import styles from "../../app/a1/a1.module.css";

export default function ExerciseList({
  exercises,
  title = "✏️ Упражнение",
}: {
  exercises: A1Exercise[];
  title?: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  const check = (id: string, correct: string) => {
    if (results[id] !== undefined) return;
    const isCorrect = normalize(answers[id] ?? "") === normalize(correct);
    setResults((prev) => ({ ...prev, [id]: isCorrect }));
  };

  const retry = (id: string) => {
    setResults((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {exercises.map((ex) => {
        const result = results[ex.id];
        return (
          <div key={ex.id} className={styles.card}>
            <p className={styles.question}>{ex.question}</p>
            <input
              type="text"
              value={answers[ex.id] ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [ex.id]: e.target.value }))
              }
              placeholder="Escribe tu respuesta"
              disabled={result !== undefined}
            />
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() => check(ex.id, ex.correct)}
                disabled={result !== undefined}
              >
                Comprobar
              </button>
              {result !== undefined && (
                <button className={styles.buttonGhost} onClick={() => retry(ex.id)}>
                  Intentar de nuevo
                </button>
              )}
            </div>
            {result !== undefined && (
              <p
                className={`${styles.feedback} ${
                  result ? styles.feedbackOk : styles.feedbackBad
                }`}
              >
                {result
                  ? "Correcto ✅"
                  : `Incorrecto ❌ → Respuesta correcta: ${ex.correct}`}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}