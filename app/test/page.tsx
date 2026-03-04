"use client";

import { useEffect, useState } from "react";
import { exercises } from "../../data/exercises";
import styles from "./test.module.css";

const TEST_SIZE = 10;
const TEST_TIME = 60;

export default function TestMode() {
  const [mounted, setMounted] = useState(false);
  const [testExercises, setTestExercises] = useState<typeof exercises>([]);

  const [time, setTime] = useState(TEST_TIME);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setMounted(true);

    const shuffled = [...exercises]
      .sort(() => Math.random() - 0.5)
      .slice(0, TEST_SIZE);

    setTestExercises(shuffled);
  }, []);

  useEffect(() => {
    if (!mounted || finished) return;

    if (time > 0) {
      const timer = setTimeout(() => setTime((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }

    setFinished(true);
  }, [time, mounted, finished]);

  if (!mounted || testExercises.length === 0) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (finished) {
    const percent = Math.round((score / TEST_SIZE) * 100);

    let level = "❌ Nivel insuficiente";

    if (percent >= 80) level = "🔥 Excelente nivel B1";
    else if (percent >= 60) level = "👍 Buen nivel";
    else if (percent >= 40) level = "⚠️ Necesita práctica";

    return (
      <div className={styles.container}>
        <div className={styles.resultBox}>
          <h2>🏁 Resultado del Simulacro</h2>

          <div className={styles.resultScore}>
            {score} / {TEST_SIZE}
          </div>

          <p>{percent}%</p>
          <p>{level}</p>

          <button
            className={styles.button}
            onClick={() => window.location.reload()}
          >
            🔁 Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  const current = testExercises[index];

  const checkAnswer = () => {
    const isCorrect =
      answer.trim().toLowerCase() === current.correct.trim().toLowerCase();

    if (isCorrect) setScore((s) => s + 1);

    setAnswer("");

    if (index + 1 < TEST_SIZE) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📝 Simulacro DELE B1</h1>

      <div className={styles.timer}>⏰ {time}s</div>

      <div className={styles.card}>
        <p className={styles.question}>{current.question}</p>

        <input
          className={styles.input}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Escribe tu respuesta"
        />

        <button className={styles.button} onClick={checkAnswer}>
          Responder
        </button>
      </div>
    </div>
  );
}
