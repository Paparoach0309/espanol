import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const interrogativosRules: A1Rule[] = [
  {
    title: "Как строится вопрос",
    paragraphs: [
      "В испанском вопросительное предложение начинается со знака ¿ и заканчивается знаком ?.",
      "Вопросительное слово ставится в начале, затем идёт глагол, а потом подлежащее: ¿Dónde vives (tú)?",
    ],
    list: [
      "¿Hablas español? — Ты говоришь по-испански? (без вопросительного слова)",
      "¿Dónde vives? — Где ты живёшь?",
      "¿Cuándo es la clase? — Когда занятие?",
      "¿Por qué estudias español? — Почему ты учишь испанский?",
    ],
  },
  {
    title: "Вопросительные слова",
    paragraphs: [
      "Все вопросительные слова пишутся с ударением (tilde), чтобы отличаться от союзов и относительных слов.",
    ],
    list: [
      "qué — что, какой",
      "quién / quiénes — кто",
      "dónde — где",
      "cuándo — когда",
      "cómo — как",
      "cuánto / cuánta / cuántos / cuántas — сколько",
      "por qué — почему",
      "cuál / cuáles — какой, который (из вариантов)",
    ],
  },
  {
    title: "Qué и Cuál",
    paragraphs: [
      "qué используют для определения или описания, cuál — для выбора из конкретных вариантов.",
    ],
    list: [
      "¿Qué es esto? — Что это?",
      "¿Qué libro prefieres? — Какую книгу ты предпочитаешь?",
      "¿Cuál prefieres, el rojo o el azul? — Какой ты предпочитаешь, красный или синий?",
      "¿Cuál es tu nombre? — Как тебя зовут? (какое из имён — твоё)",
    ],
  },
  {
    title: "Порядок слов и предлоги",
    paragraphs: [
      "Подлежащее в вопросе обычно ставится после глагола. Вопросительное слово может сочетаться с предлогом.",
    ],
    list: [
      "¿De dónde eres? — Откуда ты?",
      "¿A dónde vas? — Куда ты идёшь?",
      "¿Con quién vives? — С кем ты живёшь?",
      "¿Para qué estudias español? — Зачем ты учишь испанский?",
    ],
  },
  {
    title: "Ответ на вопрос",
    paragraphs: [
      "В ответе вопросительное слово не повторяется, а местоимение часто опускается.",
    ],
    list: [
      "¿Dónde vives? — (Vivo) en Madrid.",
      "¿Cuántos años tienes? — Tengo 25 años.",
      "¿Cómo estás? — Bien, gracias.",
    ],
  },
];

export const interrogativosExamples: A1Example[] = [
  {
    es: "¿Cómo te llamas?",
    ru: "Как тебя зовут?",
  },
  {
    es: "¿De dónde eres?",
    ru: "Откуда ты?",
  },
  {
    es: "¿Dónde vives?",
    ru: "Где ты живёшь?",
  },
  {
    es: "¿Cuántos años tienes?",
    ru: "Сколько тебе лет?",
  },
  {
    es: "¿Qué haces los fines de semana?",
    ru: "Что ты делаешь по выходным?",
  },
  {
    es: "¿Por qué estudias español?",
    ru: "Почему ты учишь испанский?",
  },
  {
    es: "¿Con quién vives?",
    ru: "С кем ты живёшь?",
  },
  {
    es: "¿Cuándo empieza la clase?",
    ru: "Когда начинается занятие?",
  },
  {
    es: "¿Cuál es tu número de teléfono?",
    ru: "Какой у тебя номер телефона?",
  },
  {
    es: "¿Para qué necesitas el diccionario?",
    ru: "Зачем тебе нужен словарь?",
  },
];

export const interrogativosExercises: A1Exercise[] = [
  {
    id: "in-ex1",
    question: "¿___ te llamas? (как)",
    correct: "cómo",
  },
  {
    id: "in-ex2",
    question: "¿De ___ eres? (откуда)",
    correct: "dónde",
  },
  {
    id: "in-ex3",
    question: "¿___ años tienes? (сколько)",
    correct: "cuántos",
  },
  {
    id: "in-ex4",
    question: "¿___ haces los fines de semana? (что)",
    correct: "qué",
  },
  {
    id: "in-ex5",
    question: "¿___ estudias español? (почему)",
    correct: "por qué",
  },
  {
    id: "in-ex6",
    question: "¿Con ___ vives? (кем)",
    correct: "quién",
  },
  {
    id: "in-ex7",
    question: "¿___ empieza la clase? (когда)",
    correct: "cuándo",
  },
  {
    id: "in-ex8",
    question: "¿___ es tu número de teléfono? (какой)",
    correct: "cuál",
  },
  {
    id: "in-ex9",
    question: "¿A ___ vas? (куда)",
    correct: "dónde",
  },
  {
    id: "in-ex10",
    question: "¿___ viven tus padres? (где)",
    correct: "dónde",
  },
];

export const interrogativosQuiz: A1QuizQuestion[] = [
  {
    id: "in-q1",
    question: "¿___ te llamas?",
    options: ["Cómo", "Qué", "Quién"],
    correct: "Cómo",
    explanation: "¿Cómo te llamas? — Как тебя зовут?",
  },
  {
    id: "in-q2",
    question: "¿De ___ eres?",
    options: ["dónde", "qué", "cuándo"],
    correct: "dónde",
    explanation: "¿De dónde eres? — Откуда ты?",
  },
  {
    id: "in-q3",
    question: "¿___ años tienes?",
    options: ["Cuántos", "Cuántas", "Cómo"],
    correct: "Cuántos",
    explanation: "años — мужской род, мн. ч.: cuántos.",
  },
  {
    id: "in-q4",
    question: "¿___ haces los fines de semana?",
    options: ["Qué", "Quién", "Cuál"],
    correct: "Qué",
    explanation: "qué — что (о действии).",
  },
  {
    id: "in-q5",
    question: "¿___ estudias español?",
    options: ["Por qué", "Porque", "Qué"],
    correct: "Por qué",
    explanation: "por qué (два слова, с ударением) — почему.",
  },
  {
    id: "in-q6",
    question: "¿Con ___ vives?",
    options: ["quién", "qué", "cuál"],
    correct: "quién",
    explanation: "con quién — с кем.",
  },
  {
    id: "in-q7",
    question: "¿___ empieza la clase?",
    options: ["Cuándo", "Dónde", "Cómo"],
    correct: "Cuándo",
    explanation: "cuándo — когда.",
  },
  {
    id: "in-q8",
    question: "¿___ es tu número de teléfono?",
    options: ["Cuál", "Qué", "Quién"],
    correct: "Cuál",
    explanation: "Выбор из конкретных вариантов → cuál.",
  },
  {
    id: "in-q9",
    question: "¿A ___ vas?",
    options: ["dónde", "cuándo", "cómo"],
    correct: "dónde",
    explanation: "¿A dónde vas? — Куда ты идёшь?",
  },
  {
    id: "in-q10",
    question: "В испанском вопросе в начале ставится знак...",
    options: ["¿", "?", "!"],
    correct: "¿",
    explanation: "Испанский вопрос открывается знаком ¿ и закрывается ?.",
  },
];
