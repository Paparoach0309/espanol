import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const verbosRegularesRules: A1Rule[] = [
  {
    title: "Правильные глаголы: три группы",
    paragraphs: [
      "В испанском все глаголы делятся на три группы по окончанию инфинитива: -ar, -er, -ir.",
      "У правильных глаголов окончания всегда одинаковые, меняется только основа (то, что остаётся, если убрать -ar / -er / -ir).",
    ],
    list: [
      "hablar (говорить) → habl- + окончания",
      "comer (есть) → com- + окончания",
      "vivir (жить) → viv- + окончания",
    ],
  },
  {
    title: "Окончания Presente de Indicativo",
    paragraphs: [
      "Настоящее время образуется так: основа глагола + личное окончание.",
    ],
    list: [
      "hablar: hablo, hablas, habla, hablamos, habláis, hablan",
      "comer: como, comes, come, comemos, coméis, comen",
      "vivir: vivo, vives, vive, vivimos, vivís, viven",
    ],
  },
  {
    title: "Таблица окончаний",
    paragraphs: [
      "Сравните окончания трёх групп. У -er и -ir они различаются только в формах nosotros и vosotros.",
    ],
    list: [
      "-ar: -o, -as, -a, -amos, -áis, -an",
      "-er: -o, -es, -e, -emos, -éis, -en",
      "-ir: -o, -es, -e, -imos, -ís, -en",
      "Местоимения обычно опускаются: (yo) hablo, (tú) comes.",
    ],
  },
  {
    title: "Глагол TENER (иметь)",
    paragraphs: [
      "tener — неправильный глагол, но очень частотный. Кроме значения «иметь», он используется в оборотах о возрасте и состоянии.",
    ],
    list: [
      "tengo — у меня есть",
      "tienes — у тебя есть",
      "tiene — у него/неё/Вас есть",
      "tenemos — у нас есть",
      "tenéis — у вас есть",
      "tienen — у них есть",
      "Tengo 20 años. — Мне 20 лет.",
      "Tengo frío / calor / hambre. — Мне холодно / жарко / хочется есть.",
    ],
  },
  {
    title: "Глагол IR (идти, ехать)",
    paragraphs: [
      "ir — неправильный глагол движения. Конструкция ir + a + инфинитив выражает ближайшее будущее.",
    ],
    list: [
      "voy — я иду/еду",
      "vas — ты идёшь/едешь",
      "va — он/она/Вы идёт/едет",
      "vamos — мы идём/едем",
      "vais — вы идёте/едете",
      "van — они идут/едут",
      "Voy a estudiar. — Я собираюсь учиться (буду учиться).",
    ],
  },
  {
    title: "Глагол OÍR (слышать)",
    paragraphs: [
      "oír — неправильный глагол. В форме yo появляется -g-, а в формах tú, él, ellos — -y-.",
    ],
    list: [
      "oigo — я слышу",
      "oyes — ты слышишь",
      "oye — он/она/Вы слышит",
      "oímos — мы слышим",
      "oís — вы слышите",
      "oyen — они слышат",
      "¿Me oyes? — Ты меня слышишь?",
    ],
  },
];

export const verbosRegularesExamples: A1Example[] = [
  {
    es: "Yo hablo español y ruso.",
    ru: "Я говорю по-испански и по-русски.",
  },
  {
    es: "Tú comes una manzana.",
    ru: "Ты ешь яблоко.",
  },
  {
    es: "Nosotros vivimos en Madrid.",
    ru: "Мы живём в Мадриде.",
  },
  {
    es: "María estudia en la universidad.",
    ru: "Мария учится в университете.",
  },
  {
    es: "Tengo dos hermanos.",
    ru: "У меня два брата.",
  },
  {
    es: "Mi hermana tiene 15 años.",
    ru: "Моей сестре 15 лет.",
  },
  {
    es: "Voy al trabajo en metro.",
    ru: "Я езжу на работу на метро.",
  },
  {
    es: "Vamos a la playa mañana.",
    ru: "Завтра мы едем на пляж.",
  },
  {
    es: "¿Oyes la música?",
    ru: "Ты слышишь музыку?",
  },
  {
    es: "No oigo nada.",
    ru: "Я ничего не слышу.",
  },
];

export const verbosRegularesExercises: A1Exercise[] = [
  {
    id: "vr-ex1",
    question: "Yo ___ español. (hablar)",
    correct: "hablo",
  },
  {
    id: "vr-ex2",
    question: "Tú ___ una manzana. (comer)",
    correct: "comes",
  },
  {
    id: "vr-ex3",
    question: "Nosotros ___ en Madrid. (vivir)",
    correct: "vivimos",
  },
  {
    id: "vr-ex4",
    question: "Ellos ___ en una oficina. (trabajar)",
    correct: "trabajan",
  },
  {
    id: "vr-ex5",
    question: "Yo ___ dos hermanos. (tener)",
    correct: "tengo",
  },
  {
    id: "vr-ex6",
    question: "Ella ___ 15 años. (tener)",
    correct: "tiene",
  },
  {
    id: "vr-ex7",
    question: "Yo ___ al trabajo en metro. (ir)",
    correct: "voy",
  },
  {
    id: "vr-ex8",
    question: "Nosotros ___ al cine esta noche. (ir)",
    correct: "vamos",
  },
  {
    id: "vr-ex9",
    question: "¿Tú ___ la música? (oír)",
    correct: "oyes",
  },
  {
    id: "vr-ex10",
    question: "Yo no ___ nada. (oír)",
    correct: "oigo",
  },
];

export const verbosRegularesQuiz: A1QuizQuestion[] = [
  {
    id: "vr-q1",
    question: "Yo ___ español. (hablar)",
    options: ["hablo", "hablas", "habla"],
    correct: "hablo",
    explanation: "yo + окончание -o: hablo.",
  },
  {
    id: "vr-q2",
    question: "Tú ___ una manzana. (comer)",
    options: ["como", "comes", "come"],
    correct: "comes",
    explanation: "tú у глаголов на -er: окончание -es.",
  },
  {
    id: "vr-q3",
    question: "Nosotros ___ en Madrid. (vivir)",
    options: ["vivimos", "vivís", "viven"],
    correct: "vivimos",
    explanation: "nosotros у глаголов на -ir: окончание -imos.",
  },
  {
    id: "vr-q4",
    question: "Yo ___ dos hermanos. (tener)",
    options: ["tengo", "tienes", "tiene"],
    correct: "tengo",
    explanation: "tener — неправильный глагол: yo tengo.",
  },
  {
    id: "vr-q5",
    question: "Mi hermana ___ 15 años. (tener)",
    options: ["tengo", "tiene", "tienen"],
    correct: "tiene",
    explanation: "ella → tiene. Возраст выражается через tener.",
  },
  {
    id: "vr-q6",
    question: "Yo ___ al trabajo en metro. (ir)",
    options: ["voy", "vas", "va"],
    correct: "voy",
    explanation: "ir — неправильный: yo voy.",
  },
  {
    id: "vr-q7",
    question: "Nosotros ___ al cine. (ir)",
    options: ["vamos", "vais", "van"],
    correct: "vamos",
    explanation: "nosotros → vamos.",
  },
  {
    id: "vr-q8",
    question: "¿Tú ___ la música? (oír)",
    options: ["oigo", "oyes", "oye"],
    correct: "oyes",
    explanation: "oír: tú oyes (-y- в основе).",
  },
  {
    id: "vr-q9",
    question: "Yo no ___ nada. (oír)",
    options: ["oigo", "oyes", "oímos"],
    correct: "oigo",
    explanation: "oír: yo oigo (-g- в форме yo).",
  },
  {
    id: "vr-q10",
    question: "Manuel ___ en la universidad. (estudiar)",
    options: ["estudio", "estudia", "estudian"],
    correct: "estudia",
    explanation: "él/ella → окончание -a: estudia.",
  },
];
