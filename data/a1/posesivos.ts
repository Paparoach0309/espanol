import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const posesivosRules: A1Rule[] = [
  {
    title: "Притяжательные местоимения (краткие формы)",
    paragraphs: [
      "Краткие притяжательные местоимения ставятся перед существительным и указывают, кому принадлежит предмет.",
      "Они согласуются в числе с предметом, а не с владельцем: mi libro / mis libros.",
    ],
    list: [
      "mi / mis — мой, мои",
      "tu / tus — твой, твои",
      "su / sus — его, её, Ваш, их",
      "nuestro / nuestra / nuestros / nuestras — наш, наша, наши",
      "vuestro / vuestra / vuestros / vuestras — ваш, ваша, ваши",
      "su / sus — их, Ваш (вежливо)",
    ],
  },
  {
    title: "Согласование с предметом",
    paragraphs: [
      "Форма зависит от рода и числа существительного, о котором идёт речь.",
    ],
    list: [
      "mi hermano — мой брат, mi hermana — моя сестра",
      "mis hermanos — мои братья, mis hermanas — мои сёстры",
      "nuestro coche — наша машина (муж. род)",
      "nuestra casa — наш дом (жен. род)",
      "nuestros amigos — наши друзья, nuestras amigas — наши подруги",
    ],
  },
  {
    title: "Двусмысленность su / sus",
    paragraphs: [
      "Форма su может значить «его», «её», «Ваш» или «их». Смысл понятен из контекста.",
      "Если нужно уточнить, используют обороты de él, de ella, de usted, de ellos:",
    ],
    list: [
      "su coche — его машина / её машина / Ваша машина / их машина",
      "el coche de él — машина (именно) его",
      "la casa de ella — дом (именно) её",
    ],
  },
  {
    title: "Ударные (полные) формы",
    paragraphs: [
      "Полные формы используются самостоятельно, без существительного, или после существительного для усиления.",
    ],
    list: [
      "mío / mía / míos / mías — мой",
      "tuyo / tuya / tuyos / tuyas — твой",
      "suyo / suya / suyos / suyas — его, её, Ваш, их",
      "nuestro / nuestra / nuestros / nuestras — наш",
      "vuestro / vuestra / vuestros / vuestras — ваш",
      "Ejemplo: Este libro es mío. — Эта книга моя.",
      "Ejemplo: Un amigo mío vive en Madrid. — Один мой друг живёт в Мадриде.",
    ],
  },
];

export const posesivosExamples: A1Example[] = [
  {
    es: "Mi hermano vive en Madrid.",
    ru: "Мой брат живёт в Мадриде.",
  },
  {
    es: "Mis padres son profesores.",
    ru: "Мои родители — преподаватели.",
  },
  {
    es: "Tu casa es muy grande.",
    ru: "Твой дом очень большой.",
  },
  {
    es: "Su coche es nuevo.",
    ru: "Его (её / Ваша / их) машина новая.",
  },
  {
    es: "Nuestro profesor habla ruso.",
    ru: "Наш преподаватель говорит по-русски.",
  },
  {
    es: "Nuestra casa está cerca del parque.",
    ru: "Наш дом рядом с парком.",
  },
  {
    es: "¿Dónde están vuestros libros?",
    ru: "Где ваши книги?",
  },
  {
    es: "Este libro es mío.",
    ru: "Эта книга моя. (полная форма)",
  },
  {
    es: "Una amiga mía vive en España.",
    ru: "Одна моя подруга живёт в Испании.",
  },
  {
    es: "Los abuelos de ellos viven en el campo.",
    ru: "Их бабушка и дедушка живут в деревне.",
  },
];

export const posesivosExercises: A1Exercise[] = [
  {
    id: "po-ex1",
    question: "___ hermano vive en Madrid. (мой)",
    correct: "mi",
  },
  {
    id: "po-ex2",
    question: "___ padres son profesores. (мои)",
    correct: "mis",
  },
  {
    id: "po-ex3",
    question: "___ casa es muy grande. (твой)",
    correct: "tu",
  },
  {
    id: "po-ex4",
    question: "___ coche es nuevo. (его)",
    correct: "su",
  },
  {
    id: "po-ex5",
    question: "___ profesor habla ruso. (наш)",
    correct: "nuestro",
  },
  {
    id: "po-ex6",
    question: "___ casa está cerca del parque. (наш)",
    correct: "nuestra",
  },
  {
    id: "po-ex7",
    question: "¿Dónde están ___ libros? (ваши)",
    correct: "vuestros",
  },
  {
    id: "po-ex8",
    question: "Este libro es ___ . (мой, полная форма)",
    correct: "mío",
  },
  {
    id: "po-ex9",
    question: "Una amiga ___ vive en España. (моя, полная форма)",
    correct: "mía",
  },
  {
    id: "po-ex10",
    question: "___ hermanas estudian en la escuela. (её)",
    correct: "sus",
  },
];

export const posesivosQuiz: A1QuizQuestion[] = [
  {
    id: "po-q1",
    question: "___ hermano vive en Madrid. (мой)",
    options: ["Mi", "Mis", "Mío"],
    correct: "Mi",
    explanation: "hermano — единственное число: mi.",
  },
  {
    id: "po-q2",
    question: "___ padres son profesores. (мои)",
    options: ["Mi", "Mis", "Mía"],
    correct: "Mis",
    explanation: "padres — множественное число: mis.",
  },
  {
    id: "po-q3",
    question: "___ casa es muy grande. (твой)",
    options: ["Tu", "Tus", "Tuyo"],
    correct: "Tu",
    explanation: "Перед существительным используют tu/tus, а не tuyo.",
  },
  {
    id: "po-q4",
    question: "___ coche es nuevo. (его)",
    options: ["Su", "Sus", "Suyo"],
    correct: "Su",
    explanation: "coche — ед. ч.: su (его/её/Ваш/их).",
  },
  {
    id: "po-q5",
    question: "___ profesor habla ruso. (наш)",
    options: ["Nuestro", "Nuestra", "Nuestros"],
    correct: "Nuestro",
    explanation: "profesor — мужской род, ед. ч.: nuestro.",
  },
  {
    id: "po-q6",
    question: "___ casa está cerca del parque. (наш)",
    options: ["Nuestro", "Nuestra", "Nuestras"],
    correct: "Nuestra",
    explanation: "casa — женский род: nuestra.",
  },
  {
    id: "po-q7",
    question: "¿Dónde están ___ libros? (ваши)",
    options: ["vuestro", "vuestros", "vuestra"],
    correct: "vuestros",
    explanation: "libros — мужской род, мн. ч.: vuestros.",
  },
  {
    id: "po-q8",
    question: "Este libro es ___ . (мой, самостоятельно)",
    options: ["mi", "mío", "mis"],
    correct: "mío",
    explanation: "Без существительного используют полную форму mío.",
  },
  {
    id: "po-q9",
    question: "Una amiga ___ vive en España. (моя)",
    options: ["mi", "mía", "mío"],
    correct: "mía",
    explanation: "После существительного — полная форма: una amiga mía.",
  },
  {
    id: "po-q10",
    question: "«Su» может означать...",
    options: [
      "только «его»",
      "его, её, Ваш или их",
      "только «Ваш»",
    ],
    correct: "его, её, Ваш или их",
    explanation: "su — многозначная форма, смысл ясен из контекста.",
  },
];
