"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Mistake {
  questionId: string;
  question: string;
  correct: string;
  userAnswer: string;
}

interface ContextType {
  score: number;
  completed: number;
  total: number;
  mistakes: Mistake[];
  darkMode: boolean;
  achievements: string[];
  completeQuestion: (id: string, isCorrect: boolean) => void;
  addMistake: (m: Mistake) => void;
  toggleTheme: () => void;
  reset: () => void;
}

const STORAGE_KEY = "subjuntivo-v3";

const SubjuntivoContext = createContext<ContextType | undefined>(undefined);

export const SubjuntivoProvider = ({ children }: { children: ReactNode }) => {
  const total = 30;

  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [mistakes, setMistakes] = useState<Mistake[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const data = JSON.parse(saved);

    setScore(data.score || 0);
    setCompleted(data.completed || 0);
    setMistakes(data.mistakes || []);
    setDarkMode(data.darkMode || false);
    setAchievements(data.achievements || []);
    setAnsweredIds(data.answeredIds || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        score,
        completed,
        mistakes,
        darkMode,
        achievements,
        answeredIds,
      })
    );

    if (score === total && !achievements.includes("Perfect Score 🏆")) {
      setAchievements((prev) => [...prev, "Perfect Score 🏆"]);
    }
  }, [score, completed, darkMode, mistakes, answeredIds]);

  const completeQuestion = (id: string, isCorrect: boolean) => {
    // Если уже отвечали — ничего не делаем
    if (answeredIds.includes(id)) return;

    setAnsweredIds((prev) => [...prev, id]);
    setCompleted((prev) => prev + 1);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const reset = () => {
    setScore(0);
    setCompleted(0);
    setMistakes([]);
    setAchievements([]);
    setAnsweredIds([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <SubjuntivoContext.Provider
      value={{
        score,
        completed,
        total,
        mistakes,
        darkMode,
        achievements,
        completeQuestion,
        addMistake: (m) => setMistakes((prev) => [...prev, m]),
        toggleTheme: () => setDarkMode((d) => !d),
        reset,
      }}
    >
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </SubjuntivoContext.Provider>
  );
};

export const useSubjuntivo = () => {
  const ctx = useContext(SubjuntivoContext);
  if (!ctx) throw new Error("Context outside provider");
  return ctx;
};
