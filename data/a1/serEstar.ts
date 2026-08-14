import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const serEstarRules: A1Rule[] = [
  {
    title: "Когда используется SER",
    paragraphs: [
      "ser используется для постоянных характеристик, идентичности и фактов.",
    ],
    list: [
      "Идентичность: Yo soy Ana.",
      "Происхождение / национальность: Soy de Rusia. Ella es española.",
      "Профессия: Él es profesor.",
      "Постоянная характеристика: Mi hermano es alto.",
      "Время и дата: Son las tres. Hoy es lunes.",
      "Принадлежность / материал: El reloj es de oro. La casa es de mis padres.",
    ],
  },
  {
    title: "Когда используется ESTAR",
    paragraphs: [
      "estar используется для временных состояний и местоположения.",
    ],
    list: [
      "Местоположение: Estoy en casa.",
      "Чувства и эмоции: Estoy cansado. Estamos contentos.",
      "Здоровье (временное): Está enfermo.",
      "Результат действия: La puerta está abierta.",
      "Настоящее время (progresivo): Estoy leyendo.",
    ],
  },
  {
    title: "Сравните: ser и estar меняют смысл",
    paragraphs: [
      "С одним и тем же прилагательным ser и estar дают разные значения.",
    ],
    list: [
      "Es aburrido. — Он скучный (по характеру). / Está aburrido. — Ему скучно (сейчас).",
      "Es bueno. — Он хороший человек. / Está bueno. — Это вкусно.",
      "Es listo. — Он умный. / Está listo. — Он готов.",
      "Es verde. — Он зелёный (цвет). / Está verde. — Он незрелый (зелёный).",
    ],
  },
];

export const serEstarExamples: A1Example[] = [
  {
    es: "Yo soy de Rusia.",
    ru: "Я из России. (постоянный факт — ser)",
  },
  {
    es: "Él es profesor de inglés.",
    ru: "Он учитель английского. (профессия — ser)",
  },
  {
    es: "Estoy en casa.",
    ru: "Я дома. (место — estar)",
  },
  {
    es: "Los niños están cansados.",
    ru: "Дети устали. (состояние — estar)",
  },
  {
    es: "Hoy es martes.",
    ru: "Сегодня вторник. (день — ser)",
  },
  {
    es: "La sopa está caliente.",
    ru: "Суп горячий (сейчас). (временное состояние — estar)",
  },
  {
    es: "Es inteligente.",
    ru: "Он(а) умный(ая). (черта характера — ser)",
  },
  {
    es: "Está enfermo hoy.",
    ru: "Он сегодня болен. (временное — estar)",
  },
];

export const serEstarExercises: A1Exercise[] = [
  {
    id: "se-ex1",
    question: "Yo ___ de Rusia.",
    correct: "soy",
  },
  {
    id: "se-ex2",
    question: "Nosotros ___ en el parque.",
    correct: "estamos",
  },
  {
    id: "se-ex3",
    question: "Ella ___ enfermera.",
    correct: "es",
  },
  {
    id: "se-ex4",
    question: "Hoy ___ el lunes.",
    correct: "es",
  },
  {
    id: "se-ex5",
    question: "Los niños ___ cansados.",
    correct: "están",
  },
  {
    id: "se-ex6",
    question: "Tú ___ muy simpático.",
    correct: "eres",
  },
  {
    id: "se-ex7",
    question: "La mesa ___ de madera.",
    correct: "es",
  },
  {
    id: "se-ex8",
    question: "¿Dónde ___ el libro? Está en la mochila.",
    correct: "está",
  },
  {
    id: "se-ex9",
    question: "Yo ___ contento hoy.",
    correct: "estoy",
  },
];

export const serEstarQuiz: A1QuizQuestion[] = [
  {
    id: "se-q1",
    question: "Yo ___ de Rusia.",
    options: ["soy", "estoy", "es"],
    correct: "soy",
    explanation: "Происхождение — постоянный факт, ser.",
  },
  {
    id: "se-q2",
    question: "___ en casa.",
    options: ["Soy", "Estoy", "Es"],
    correct: "Estoy",
    explanation: "Местоположение — estar.",
  },
  {
    id: "se-q3",
    question: "Ella ___ profesora. (профессия)",
    options: ["es", "está", "estoy"],
    correct: "es",
    explanation: "Профессия — ser.",
  },
  {
    id: "se-q4",
    question: "Los niños ___ cansados.",
    options: ["son", "están", "eres"],
    correct: "están",
    explanation: "Временное состояние — estar.",
  },
  {
    id: "se-q5",
    question: "Hoy ___ martes.",
    options: ["es", "está", "son"],
    correct: "es",
    explanation: "День недели — ser.",
  },
  {
    id: "se-q6",
    question: "¿Dónde ___ el libro?",
    options: ["es", "está", "soy"],
    correct: "está",
    explanation: "Местоположение — estar.",
  },
  {
    id: "se-q7",
    question: "Mi hermano ___ alto. (характеристика)",
    options: ["es", "está", "estoy"],
    correct: "es",
    explanation: "Постоянная характеристика — ser.",
  },
  {
    id: "se-q8",
    question: "Hoy ___ enfermo. (временное)",
    options: ["soy", "estoy", "eres"],
    correct: "estoy",
    explanation: "Временное состояние здоровья — estar.",
  },
  {
    id: "se-q9",
    question: "«Está aburrido» означает...",
    options: ["Ему скучно (сейчас)", "Он скучный (по характеру)", "Он скучает"],
    correct: "Ему скучно (сейчас)",
    explanation: "С estar — временное чувство: ему сейчас скучно.",
  },
];