import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const sustantivoRules: A1Rule[] = [
  {
    title: "Род существительных — базовое правило",
    paragraphs: [
      "В испанском языке все существительные имеют род: masculino (мужской) или femenino (женский).",
      "Основное правило: слова, оканчивающиеся на -o, чаще всего мужского рода, а на -a — женского.",
      "Артикль помогает определить род: el — для мужского, la — для женского.",
    ],
    list: [
      "masculino: el libro, el perro, el niño, el coche",
      "femenino: la casa, la mesa, la niña, la ventana",
    ],
  },
  {
    title: "Исключения и важные окончания",
    paragraphs: [
      "Не всегда окончание указывает на род. Запомните важные группы слов.",
    ],
    list: [
      "el día, el mapa, el problema, el tema, el sistema — мужского рода, хотя и оканчиваются на -a",
      "la mano, la foto, la moto — женского рода, хотя оканчиваются на -o",
      "Суффиксы -ción, -sión, -dad, -tad, -tud, -umbre → женский род: la canción, la decisión, la ciudad, la libertad, la juventud, la costumbre",
      "Суффиксы -or, -aje → мужской род: el profesor, el viaje, el mensaje",
    ],
  },
  {
    title: "Существительные-«люди и животные»",
    paragraphs: [
      "Для людей и животных род обычно соответствует полу: меняется окончание или появляется слово другого рода.",
    ],
    list: [
      "el chico → la chica (мальчик → девочка)",
      "el profesor → la profesora (учитель → учительница)",
      "el amigo → la amiga (друг → подруга)",
      "el gato → la gata (кот → кошка)",
      "el padre / la madre (отец / мать), el hombre / la mujer (мужчина / женщина)",
    ],
  },
];

export const sustantivoExamples: A1Example[] = [
  {
    es: "El niño corre rápido.",
    ru: "Мальчик бежит быстро. — La niña corre rápido. (Девочка бежит быстро.)",
  },
  {
    es: "El gato es blanco.",
    ru: "Кот белый. — La gata es blanca. (Кошка белая.)",
  },
  {
    es: "Mi abuelo lee el periódico.",
    ru: "Мой дедушка читает газету. — Mi abuela lee la revista. (Моя бабушка читает журнал.)",
  },
  {
    es: "El profesor explica la lección.",
    ru: "Учитель объясняет урок. — La profesora explica la lección. (Учительница объясняет урок.)",
  },
];

export const sustantivoExercises: A1Exercise[] = [
  {
    id: "sus-ex1",
    question: "Напиши женский род: el amigo → la ___",
    correct: "amiga",
  },
  {
    id: "sus-ex2",
    question: "Напиши женский род: el profesor → la ___",
    correct: "profesora",
  },
  {
    id: "sus-ex3",
    question: "Напиши женский род: el gato → la ___",
    correct: "gata",
  },
  {
    id: "sus-ex4",
    question: "Какой род у слова «mano»? Напиши: masculino или femenino",
    correct: "femenino",
  },
  {
    id: "sus-ex5",
    question: "Какой род у слова «problema»? Напиши: masculino или femenino",
    correct: "masculino",
  },
  {
    id: "sus-ex6",
    question: "Напиши женский род: el hijo → la ___",
    correct: "hija",
  },
];

export const sustantivoQuiz: A1QuizQuestion[] = [
  {
    id: "sus-q1",
    question: "«El libro» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "masculino",
    explanation: "Слова на -o обычно мужского рода: el libro.",
  },
  {
    id: "sus-q2",
    question: "«La casa» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "femenino",
    explanation: "Слова на -a обычно женского рода: la casa.",
  },
  {
    id: "sus-q3",
    question: "Женский род от «el amigo» — это...",
    options: ["la amiga", "el amigo", "la amigo"],
    correct: "la amiga",
    explanation: "el amigo → la amiga (друг → подруга).",
  },
  {
    id: "sus-q4",
    question: "«La mano» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "femenino",
    explanation: "Исключение: la mano — женского рода, хотя оканчивается на -o.",
  },
  {
    id: "sus-q5",
    question: "«El día» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "masculino",
    explanation: "Исключение: el día — мужского рода, хотя оканчивается на -a.",
  },
  {
    id: "sus-q6",
    question: "Слова на -ción (la canción, la lección) — какого рода?",
    options: ["masculino", "femenino"],
    correct: "femenino",
    explanation: "Суффикс -ción всегда указывает на женский род.",
  },
  {
    id: "sus-q7",
    question: "«El coche» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "masculino",
    explanation: "Слова, оканчивающиеся на -e, бывают разного рода, но el coche — мужской.",
  },
  {
    id: "sus-q8",
    question: "Женский род от «el profesor» — это...",
    options: ["la profesion", "la profesora", "la profesa"],
    correct: "la profesora",
    explanation: "el profesor → la profesora.",
  },
  {
    id: "sus-q9",
    question: "«El problema» — слово какого рода?",
    options: ["masculino", "femenino"],
    correct: "masculino",
    explanation: "Слова греческого происхождения на -ma (problema, tema, sistema) — мужского рода.",
  },
];