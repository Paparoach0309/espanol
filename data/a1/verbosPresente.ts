import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const verbosPresenteRules: A1Rule[] = [
  {
    title: "Presente de Indicativo",
    paragraphs: [
      "Presente de Indicativo — настоящее время. Оно описывает действия сейчас, привычки и общие факты.",
      "Некоторые частотные глаголы меняют гласную в основе (глаголы с чередованием).",
    ],
  },
  {
    title: "QUERER (хотеть)",
    paragraphs: [
      "Чередование e → ie во всех формах, кроме nosotros и vosotros.",
    ],
    list: [
      "yo quiero",
      "tú quieres",
      "él / ella / usted quiere",
      "nosotros queremos",
      "vosotros queréis",
      "ellos / ellas / ustedes quieren",
      "Quiero un café. — Я хочу кофе.",
      "¿Quieres venir conmigo? — Хочешь пойти со мной?",
    ],
  },
  {
    title: "PODER (мочь)",
    paragraphs: [
      "Чередование o → ue во всех формах, кроме nosotros и vosotros.",
    ],
    list: [
      "yo puedo",
      "tú puedes",
      "él / ella / usted puede",
      "nosotros podemos",
      "vosotros podéis",
      "ellos / ellas / ustedes pueden",
      "Puedo ayudarte. — Я могу тебе помочь.",
      "¿Puedes hablar más despacio? — Можешь говорить помедленнее?",
    ],
  },
  {
    title: "VENIR (приходить)",
    paragraphs: [
      "Чередование e → ie, а форма yo — неправильная (vengo).",
    ],
    list: [
      "yo vengo",
      "tú vienes",
      "él / ella / usted viene",
      "nosotros venimos",
      "vosotros venís",
      "ellos / ellas / ustedes vienen",
      "Vengo de Rusia. — Я из России (приехал оттуда).",
      "¿Vienes a la fiesta? — Ты придёшь на праздник?",
    ],
  },
  {
    title: "DECIR (говорить, сказать)",
    paragraphs: [
      "Чередование e → i, а форма yo — неправильная (digo).",
    ],
    list: [
      "yo digo",
      "tú dices",
      "él / ella / usted dice",
      "nosotros decimos",
      "vosotros decís",
      "ellos / ellas / ustedes dicen",
      "Digo la verdad. — Я говорю правду.",
      "¿Qué dices? — Что ты говоришь?",
    ],
  },
  {
    title: "Запомните",
    paragraphs: [
      "Формы nosotros и vosotros почти всегда сохраняют гласную основы: queremos, podéis, venimos, decís.",
      "Глаголы querer и poder часто используются с инфинитивом: quiero estudiar, puedo ayudar.",
    ],
  },
];

export const verbosPresenteExamples: A1Example[] = [
  {
    es: "Quiero un café, por favor.",
    ru: "Я хочу кофе, пожалуйста.",
  },
  {
    es: "¿Quieres venir conmigo?",
    ru: "Хочешь пойти со мной?",
  },
  {
    es: "No podemos salir hoy.",
    ru: "Мы не можем выйти сегодня.",
  },
  {
    es: "Puedo ayudarte con la tarea.",
    ru: "Я могу помочь тебе с домашним заданием.",
  },
  {
    es: "Mis amigos vienen a la fiesta.",
    ru: "Мои друзья приходят на праздник.",
  },
  {
    es: "Vengo de la universidad.",
    ru: "Я иду (прихожу) из университета.",
  },
  {
    es: "¿Qué dices? No te oigo bien.",
    ru: "Что ты говоришь? Я тебя плохо слышу.",
  },
  {
    es: "Siempre decimos la verdad.",
    ru: "Мы всегда говорим правду.",
  },
  {
    es: "Ella quiere aprender español.",
    ru: "Она хочет выучить испанский.",
  },
  {
    es: "¿Puedes hablar más despacio?",
    ru: "Можешь говорить помедленнее?",
  },
];

export const verbosPresenteExercises: A1Exercise[] = [
  {
    id: "vp-ex1",
    question: "Yo ___ un café. (querer)",
    correct: "quiero",
  },
  {
    id: "vp-ex2",
    question: "¿Tú ___ venir conmigo? (querer)",
    correct: "quieres",
  },
  {
    id: "vp-ex3",
    question: "Nosotros ___ estudiar español. (querer)",
    correct: "queremos",
  },
  {
    id: "vp-ex4",
    question: "Yo ___ ayudarte. (poder)",
    correct: "puedo",
  },
  {
    id: "vp-ex5",
    question: "¿___ hablar más despacio? (poder, tú)",
    correct: "puedes",
  },
  {
    id: "vp-ex6",
    question: "Mis amigos ___ a la fiesta. (venir)",
    correct: "vienen",
  },
  {
    id: "vp-ex7",
    question: "Yo ___ de la universidad. (venir)",
    correct: "vengo",
  },
  {
    id: "vp-ex8",
    question: "¿Qué ___ ? No te oigo. (decir, tú)",
    correct: "dices",
  },
  {
    id: "vp-ex9",
    question: "Yo ___ la verdad. (decir)",
    correct: "digo",
  },
  {
    id: "vp-ex10",
    question: "Nosotros siempre ___ la verdad. (decir)",
    correct: "decimos",
  },
];

export const verbosPresenteQuiz: A1QuizQuestion[] = [
  {
    id: "vp-q1",
    question: "Yo ___ un café. (querer)",
    options: ["quiero", "quero", "quieres"],
    correct: "quiero",
    explanation: "querer: yo quiero (e → ie).",
  },
  {
    id: "vp-q2",
    question: "¿Tú ___ venir conmigo? (querer)",
    options: ["quiero", "quieres", "quiere"],
    correct: "quieres",
    explanation: "tú quieres.",
  },
  {
    id: "vp-q3",
    question: "Nosotros ___ estudiar. (querer)",
    options: ["queremos", "quieremos", "quieren"],
    correct: "queremos",
    explanation: "В форме nosotros чередования нет: queremos.",
  },
  {
    id: "vp-q4",
    question: "Yo ___ ayudarte. (poder)",
    options: ["puedo", "podo", "puedes"],
    correct: "puedo",
    explanation: "poder: yo puedo (o → ue).",
  },
  {
    id: "vp-q5",
    question: "¿___ hablar más despacio? (poder, tú)",
    options: ["Puedo", "Puedes", "Puede"],
    correct: "Puedes",
    explanation: "tú puedes.",
  },
  {
    id: "vp-q6",
    question: "Mis amigos ___ a la fiesta. (venir)",
    options: ["vienen", "venen", "vienes"],
    correct: "vienen",
    explanation: "ellos vienen (e → ie).",
  },
  {
    id: "vp-q7",
    question: "Yo ___ de la universidad. (venir)",
    options: ["vengo", "vieno", "venir"],
    correct: "vengo",
    explanation: "venir: yo vengo — неправильная форма.",
  },
  {
    id: "vp-q8",
    question: "¿Qué ___ ? No te oigo. (decir, tú)",
    options: ["dices", "deces", "dice"],
    correct: "dices",
    explanation: "decir: tú dices (e → i).",
  },
  {
    id: "vp-q9",
    question: "Yo ___ la verdad. (decir)",
    options: ["digo", "dico", "dices"],
    correct: "digo",
    explanation: "decir: yo digo — неправильная форма.",
  },
  {
    id: "vp-q10",
    question: "Nosotros ___ la verdad. (decir)",
    options: ["decimos", "dicemos", "dicen"],
    correct: "decimos",
    explanation: "В форме nosotros чередования нет: decimos.",
  },
];
