import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const preposicionesRules: A1Rule[] = [
  {
    title: "Основные простые предлоги",
    paragraphs: [
      "Простые предлоги — короткие слова, которые связывают слова в предложении. Вот самые важные:",
    ],
    list: [
      "a — в, к, в направлении: Voy a Madrid.",
      "de — из, от, принадлежность: Soy de Rusia. El libro de María.",
      "en — в, на (место, время): Estoy en casa. En verano.",
      "con — с: Café con leche.",
      "sin — без: Café sin azúcar.",
      "por — за, по, благодаря: Gracias por tu ayuda.",
      "para — для, чтобы: Este regalo es para ti.",
      "sobre — на, о: El libro está sobre la mesa. Un libro sobre historia.",
      "entre — между: El gato está entre la silla y la mesa.",
      "desde — с (от), desde: Desde las nueve hasta las cinco.",
      "hasta — до: Te espero hasta las cinco.",
      "hacia — по направлению: Voy hacia la puerta.",
    ],
  },
  {
    title: "Важные отличия: por и para",
    paragraphs: [
      "por — причина, благодарность, проход сквозь: Gracias por todo. Camino por el parque.",
      "para — цель, получатель, срок: Este libro es para ti. Estudio para aprender.",
    ],
  },
];

export const preposicionesExamples: A1Example[] = [
  {
    es: "Vivo en Madrid.",
    ru: "Я живу в Мадриде.",
  },
  {
    es: "Voy a la escuela.",
    ru: "Я иду в школу.",
  },
  {
    es: "El libro es de María.",
    ru: "Книга принадлежит Марии.",
  },
  {
    es: "Soy de Rusia.",
    ru: "Я из России.",
  },
  {
    es: "Quiero un café con leche, sin azúcar.",
    ru: "Я хочу кофе с молоком, без сахара.",
  },
  {
    es: "Gracias por tu ayuda.",
    ru: "Спасибо за твою помощь.",
  },
  {
    es: "Este regalo es para ti.",
    ru: "Этот подарок для тебя.",
  },
  {
    es: "Te espero hasta las cinco.",
    ru: "Я жду тебя до пяти.",
  },
];

export const preposicionesExercises: A1Exercise[] = [
  {
    id: "pre-ex1",
    question: "Vivo ___ Madrid.",
    correct: "en",
  },
  {
    id: "pre-ex2",
    question: "Voy ___ la escuela.",
    correct: "a",
  },
  {
    id: "pre-ex3",
    question: "El libro es ___ María.",
    correct: "de",
  },
  {
    id: "pre-ex4",
    question: "Quiero café ___ leche.",
    correct: "con",
  },
  {
    id: "pre-ex5",
    question: "Gracias ___ tu ayuda.",
    correct: "por",
  },
  {
    id: "pre-ex6",
    question: "Estudio ___ el examen.",
    correct: "para",
  },
  {
    id: "pre-ex7",
    question: "Te espero ___ las cinco.",
    correct: "hasta",
  },
  {
    id: "pre-ex8",
    question: "La foto está ___ la mesa.",
    correct: "sobre",
  },
  {
    id: "pre-ex9",
    question: "El gato está ___ la silla y la mesa.",
    correct: "entre",
  },
  {
    id: "pre-ex10",
    question: "Soy ___ Rusia.",
    correct: "de",
  },
];

export const preposicionesQuiz: A1QuizQuestion[] = [
  {
    id: "pre-q1",
    question: "Vivo ___ Madrid.",
    options: ["en", "a", "de"],
    correct: "en",
    explanation: "en — в городе/стране.",
  },
  {
    id: "pre-q2",
    question: "Voy ___ la escuela.",
    options: ["de", "a", "en"],
    correct: "a",
    explanation: "a — направление движения.",
  },
  {
    id: "pre-q3",
    question: "El libro es ___ María.",
    options: ["de", "con", "para"],
    correct: "de",
    explanation: "de — принадлежность.",
  },
  {
    id: "pre-q4",
    question: "Quiero café ___ leche.",
    options: ["sin", "con", "de"],
    correct: "con",
    explanation: "con — с молоком.",
  },
  {
    id: "pre-q5",
    question: "Gracias ___ tu ayuda.",
    options: ["para", "por", "en"],
    correct: "por",
    explanation: "Благодарность → por.",
  },
  {
    id: "pre-q6",
    question: "Este regalo es ___ ti.",
    options: ["para", "por", "de"],
    correct: "para",
    explanation: "para — получатель/назначение.",
  },
  {
    id: "pre-q7",
    question: "El gato está ___ la silla y la mesa.",
    options: ["entre", "sobre", "hacia"],
    correct: "entre",
    explanation: "entre — между.",
  },
  {
    id: "pre-q8",
    question: "Te espero ___ las cinco.",
    options: ["hasta", "desde", "hacia"],
    correct: "hasta",
    explanation: "hasta — до определённого момента.",
  },
  {
    id: "pre-q9",
    question: "Quiero café ___ azúcar. (без сахара)",
    options: ["con", "sin", "sobre"],
    correct: "sin",
    explanation: "sin — без.",
  },
  {
    id: "pre-q10",
    question: "Soy ___ Rusia.",
    options: ["de", "en", "a"],
    correct: "de",
    explanation: "Происхождение → de.",
  },
];