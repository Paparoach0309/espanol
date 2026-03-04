"use client";

import { useState } from "react";
import { useSubjuntivo } from "../context/SubjuntivoContext";
import styles from "../app/ejercicios/ejercicios.module.css";

interface Props {
  id: string;
  question: string;
  correct: string;
}

export default function ExerciseCard({ id, question, correct }: Props) {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const { completeQuestion, addMistake } = useSubjuntivo();

  const normalize = (value: string) => value.trim().toLowerCase();

  const checkAnswer = () => {
    if (isAnswered) return;

    const userAnswer = normalize(answer);
    const correctAnswer = normalize(correct);

    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      setResult("Correcto ✅");
    } else {
      setResult(`Incorrecto ❌ → Respuesta correcta: ${correct}`);
      addMistake({
        questionId: id,
        question,
        correct,
        userAnswer: answer,
      });
    }

    completeQuestion(id, isCorrect);

    setIsAnswered(true);
  };

  const handleRetry = () => {
    setAnswer("");
    setResult(null);
    setIsAnswered(false);
  };

  return (
    <div className={styles.card}>
      <p className={styles.question}>{question}</p>

      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Escribe tu respuesta"
        disabled={isAnswered}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={checkAnswer} disabled={isAnswered}>
          Comprobar
        </button>

        {isAnswered && <button onClick={handleRetry}>Intentar de nuevo</button>}
      </div>

      {result && (
        <p
          style={{
            marginTop: "10px",
            fontWeight: 500,
          }}
        >
          {result}
        </p>
      )}
    </div>
  );
}
