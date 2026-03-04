"use client";
import { useSubjuntivo } from "../../context/SubjuntivoContext";

export default function Analytics() {
  const { mistakes, achievements } = useSubjuntivo();

  return (
    <div style={{ padding: 40 }}>
      <h2>📊 Analítica de errores</h2>

      {mistakes.length === 0 && <p>No hay errores registrados 🎉</p>}

      {mistakes.map((m, i) => (
        <div key={i} style={{ marginBottom: 15 }}>
          <strong>{m.question}</strong>
          <p>Tu respuesta: {m.userAnswer}</p>
          <p>Correcta: {m.correct}</p>
        </div>
      ))}

      <h2 style={{ marginTop: 40 }}>🏆 Logros</h2>
      {achievements.length === 0 && <p>Aún no hay logros</p>}
      {achievements.map((a, i) => (
        <p key={i}>{a}</p>
      ))}
    </div>
  );
}
