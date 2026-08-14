import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const adjetivoRules: A1Rule[] = [
  {
    title: "Согласование прилагательных",
    paragraphs: [
      "Прилагательное согласуется с существительным в роде и числе: меняется окончание.",
      "Прилагательные на -o: в мужском роде -o, в женском -a. Прилагательные на -e и на согласную — одинаковые для обоих родов.",
    ],
    list: [
      "bueno → buena: un chico bueno, una chica buena",
      "alto → alta: el hombre alto, la mujer alta",
      "-e: un coche grande, una casa grande",
      "согласная: un niño feliz, una niña feliz; el libro azul, la pluma azul",
    ],
  },
  {
    title: "Число (множественное число)",
    paragraphs: ["Множественное число образуется по тем же правилам, что и у существительных."],
    list: [
      "гласная + s: rojo → rojos, roja → rojas",
      "согласная + es: feliz → felices, azul → azules",
    ],
  },
  {
    title: "Положение прилагательного",
    paragraphs: [
      "Прилагательное обычно ставится ПОСЛЕ существительного.",
    ],
    list: [
      "un coche rojo (красная машина)",
      "una casa grande (большой дом)",
      "un estudiante inteligente (умный студент)",
    ],
  },
];

export const adjetivoExamples: A1Example[] = [
  {
    es: "El coche es rojo. / La casa es roja.",
    ru: "Машина красная. / Дом красный. (окончание меняется)",
  },
  {
    es: "El hombre es alto. / La mujer es alta.",
    ru: "Мужчина высокий. / Женщина высокая.",
  },
  {
    es: "El estudiante es inteligente. / La estudiante es inteligente.",
    ru: "Студент умный. / Студентка умная. (на -e — не меняется)",
  },
  {
    es: "Los chicos son felices. / Las chicas son felices.",
    ru: "Мальчики счастливые. / Девочки счастливые.",
  },
  {
    es: "Quiero una camisa azul.",
    ru: "Я хочу синюю рубашку. (azul — не меняется по родам)",
  },
];

export const adjetivoExercises: A1Exercise[] = [
  {
    id: "adj-ex1",
    question: "Напиши женский род: bueno → ___",
    correct: "buena",
  },
  {
    id: "adj-ex2",
    question: "Напиши женский род: alto → ___",
    correct: "alta",
  },
  {
    id: "adj-ex3",
    question: "Напиши мужской род: roja → ___",
    correct: "rojo",
  },
  {
    id: "adj-ex4",
    question: "Напиши множественное число: rojo → ___",
    correct: "rojos",
  },
  {
    id: "adj-ex5",
    question: "Напиши множественное число: feliz → ___",
    correct: "felices",
  },
  {
    id: "adj-ex6",
    question: "Какой род у «elegante» для «la mujer»? Напиши слово полностью",
    correct: "elegante",
  },
];

export const adjetivoQuiz: A1QuizQuestion[] = [
  {
    id: "adj-q1",
    question: "«Un hombre alto» → женский вариант: «una mujer ___»",
    options: ["alta", "alto", "altas"],
    correct: "alta",
    explanation: "alto → alta.",
  },
  {
    id: "adj-q2",
    question: "Множественное число «coche rojo» → «coches ___»",
    options: ["rojas", "rojo", "rojos"],
    correct: "rojos",
    explanation: "rojo → rojos (мужской род, множественное число).",
  },
  {
    id: "adj-q3",
    question: "Прилагательное «inteligente» для «la estudiante» — ...",
    options: ["inteligenta", "inteligente", "inteligentes"],
    correct: "inteligente",
    explanation: "Прилагательные на -e не меняются по родам.",
  },
  {
    id: "adj-q4",
    question: "«Un perro blanco» → женский вариант: «una perra ___»",
    options: ["blanco", "blanca", "blancas"],
    correct: "blanca",
    explanation: "blanco → blanca.",
  },
  {
    id: "adj-q5",
    question: "Множественное число прилагательного «feliz» — ...",
    options: ["felizes", "feliz", "felices"],
    correct: "felices",
    explanation: "Согласная + es: feliz → felices.",
  },
  {
    id: "adj-q6",
    question: "В предложении «La casa grande» слово «grande» стоит...",
    options: ["после существительного", "перед существительным", "в начале"],
    correct: "после существительного",
    explanation: "Обычно прилагательное стоит после существительного.",
  },
  {
    id: "adj-q7",
    question: "«Un amigo simpático» → женский вариант: «una amiga ___»",
    options: ["simpático", "simpática", "simpaticos"],
    correct: "simpática",
    explanation: "simpático → simpática.",
  },
  {
    id: "adj-q8",
    question: "Множественное число «libro rojo» → «libros ___»",
    options: ["rojo", "rojas", "rojos"],
    correct: "rojos",
    explanation: "rojo → rojos.",
  },
  {
    id: "adj-q9",
    question: "«Grande» для «las casas» — ...",
    options: ["grandes", "granda", "grandos"],
    correct: "grandes",
    explanation: "гласная + s: grande → grandes.",
  },
];