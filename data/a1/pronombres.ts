import { A1Exercise, A1Example, A1Rule } from "./types";

export const pronombresRules: A1Rule[] = [
  {
    title: "Личные местоимения (подлежащее)",
    paragraphs: [
      "Личные местоимения указывают, кто выполняет действие.",
    ],
    list: [
      "yo — я",
      "tú — ты",
      "usted — Вы (вежливо)",
      "él — он, ella — она",
      "nosotros / nosotras — мы",
      "vosotros / vosotras — вы (в Испании)",
      "ustedes — вы (в Латинской Америке)",
      "ellos / ellas — они",
    ],
  },
  {
    title: "Род местоимений",
    paragraphs: [
      "В формах множественного числа «мы» и «они» есть род: -os для мужского, -as для женского (если группа только из женщин).",
    ],
    list: [
      "nosotros — мы (мужчины или смешанная группа), nosotras — мы (женщины)",
      "ellos — они (мужчины или смешанная группа), ellas — они (женщины)",
    ],
  },
  {
    title: "Вежливые формы",
    paragraphs: [
      "Usted (Вы) — вежливая форма единственного числа, ustedes — вежливая форма множественного числа. Они используются с формами глагола 3-го лица.",
    ],
  },
  {
    title: "Местоимение часто опускается",
    paragraphs: [
      "В испанском местоимение-подлежащее обычно опускается, потому что окончание глагола уже показывает лицо. Местоимение используется для уточнения или выделения.",
    ],
    list: [
      "(Yo) soy estudiante. — Я студент.",
      "(Tú) hablas español. — Ты говоришь по-испански.",
      "Él es mi hermano, no yo. — Он мой брат, не я.",
    ],
  },
];

export const pronombresExamples: A1Example[] = [
  {
    es: "Yo soy Ana.",
    ru: "Я — Ана.",
  },
  {
    es: "Tú eres estudiante.",
    ru: "Ты — студент.",
  },
  {
    es: "Él es mi hermano. Ella es mi hermana.",
    ru: "Он — мой брат. Она — моя сестра.",
  },
  {
    es: "Nosotros somos amigos.",
    ru: "Мы — друзья.",
  },
  {
    es: "Ustedes hablan español.",
    ru: "Вы говорите по-испански.",
  },
  {
    es: "Ellos viven en Madrid.",
    ru: "Они живут в Мадриде.",
  },
];

export const pronombresExercises: A1Exercise[] = [
  {
    id: "pro-ex1",
    question: "Вставь местоимение: ___ somos estudiantes.",
    correct: "nosotros",
  },
  {
    id: "pro-ex2",
    question: "Вставь местоимение: ___ es mi madre.",
    correct: "ella",
  },
  {
    id: "pro-ex3",
    question: "Вставь местоимение: ___ eres mi amiga.",
    correct: "tú",
  },
  {
    id: "pro-ex4",
    question: "Вставь местоимение: ___ hablamos español.",
    correct: "nosotros",
  },
  {
    id: "pro-ex5",
    question: "Вставь местоимение: ___ son médicos.",
    correct: "ellos",
  },
  {
    id: "pro-ex6",
    question: "Вставь местоимение (вежливая форма): ___ es el profesor.",
    correct: "usted",
  },
];