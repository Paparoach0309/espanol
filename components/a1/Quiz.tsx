"use client";

import { useState } from "react";
import { A1QuizQuestion } from "../../data/a1/types";
import styles from "../../app/a1/a1.module.css";

interface Props {
  questions: A1QuizQuestion[];
  title: string;
}

export default function Quiz({ questions, title }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<
    { q: A1QuizQuestion; picked: string; ok: boolean }[]
  >([]);

  const current = questions[index];

  const choose = (option: string) => {
    if (answered) return;
    setSelected(option);
    const ok = option === current.correct;
    setAnswered(true);
    if (ok) setScore((s) => s + 1);
    setResults((prev) => [...prev, { q: current, picked: option, ok }]);
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    let level = "❌ Нужно повторить тему";
    if (percent >= 80) level = "🔥 Отлично!";
    else if (percent >= 60) level = "👍 Хорошо!";
    else if (percent >= 40) level = "⚠️ Стоит ещё попрактиковаться";

    return (
      <div className={styles.resultBox}>
        <h2>🏁 Результат теста</h2>
        <div className={styles.resultScore}>
          {score} / {questions.length}
        </div>
        <p>
          {percent}% — <strong>{level}</strong>
        </p>
        <button
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          🔁 Пройти заново
        </button>
        <div className={styles.resultList}>
          {results.map((r, i) => (
            <div key={i} className={styles.resultItem}>
              {r.ok ? "✅" : "❌"} {r.q.question} → <mark>{r.q.correct}</mark>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizCard}>
      <div className={styles.quizTop}>
        <span className={styles.quizProgress}>
          {title}: {index + 1} / {questions.length}
        </span>
        <span className={styles.quizScore}>Очки: {score}</span>
      </div>

      <p className={styles.quizQuestion}>{current.question}</p>

      {current.options.map((option) => {
        let cls = styles.option;
        if (answered) {
          if (option === current.correct) cls = `${cls} ${styles.optionCorrect}`;
          else if (option === selected) cls = `${cls} ${styles.optionWrong}`;
        }
        return (
          <button
            key={option}
            className={cls}
            disabled={answered}
            onClick={() => choose(option)}
          >
            {option}
          </button>
        );
      })}

      {answered && current.explanation && (
        <div className={styles.explanation}>💡 {current.explanation}</div>
      )}

      {answered && (
        <div style={{ marginTop: 14 }}>
          <button className={styles.button} onClick={next}>
            {index + 1 < questions.length ? "Следующий вопрос →" : "Показать результат"}
          </button>
        </div>
      )}
    </div>
  );
}