"use client";

import { useEffect, useState } from "react";
import { exercises } from "../../data/exercises";
import { useSubjuntivo } from "../../context/SubjuntivoContext";

export default function TestMode() {
  const { completeQuestion } = useSubjuntivo();

  const [time, setTime] = useState(60);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  if (time === 0) {
    return <h2 style={{ padding: 40 }}>⏰ Tiempo terminado</h2>;
  }

  const current = exercises[index];

  const check = () => {
    const isCorrect =
      answer.trim().toLowerCase() === current.correct.trim().toLowerCase();

    completeQuestion(current.id, isCorrect);

    setAnswer("");
    setIndex((i) => (i + 1) % exercises.length);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Modo Test — Tiempo: {time}s</h2>

      <p>{current.question}</p>

      <input value={answer} onChange={(e) => setAnswer(e.target.value)} />

      <button onClick={check}>Responder</button>
    </div>
  );
}
