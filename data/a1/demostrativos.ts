import { A1Exercise, A1Example, A1QuizQuestion, A1Rule } from "./types";

export const demostrativosRules: A1Rule[] = [
  {
    title: "Что такое указательные местоимения",
    paragraphs: [
      "Указательные местоимения показывают, насколько предмет находится далеко от говорящего: близко, на среднем расстоянии или далеко.",
      "Они согласуются с существительным в роде и числе.",
    ],
  },
  {
    title: "Три степени удалённости",
    paragraphs: [
      "В испанском выделяют три степени: cerca (близко), media distancia (средне) и lejos (далеко).",
    ],
    list: [
      "este (этот), esta (эта), estos (эти), estas (эти) — близко: Este libro es interesante.",
      "ese (тот), esa (та), esos (те), esas (те) — на среднем расстоянии: Ese chico es mi vecino.",
      "aquel (тот), aquella (та), aquellos (те), aquellas (те) — далеко: Aquella casa es muy antigua.",
    ],
  },
  {
    title: "Нейтральные формы",
    paragraphs: [
      "Формы esto, eso, aquello не изменяются по роду и числу и используются, когда речь идёт о неизвестном предмете, идее или ситуации.",
    ],
    list: [
      "¿Qué es esto? — Что это?",
      "Eso es importante. — Это важно.",
      "Aquello fue divertido. — То было весело.",
    ],
  },
  {
    title: "Указательные наречия места",
    paragraphs: [
      "Наречия места соответствуют тем же трём степеням удалённости, что и местоимения.",
    ],
    list: [
      "aquí / acá — здесь (рядом со мной)",
      "ahí — там (рядом с тобой, среднее расстояние)",
      "allí / allá — вон там (далеко)",
      "Ejemplo: Mi casa está aquí, la tienda está ahí y el parque está allí.",
    ],
  },
  {
    title: "Обратите внимание",
    paragraphs: [
      "Местоимения este/ese/aquel пишутся без ударения, а наречия aquí, ahí, allí — с ударением.",
      "Перед существительным указательное слово работает как прилагательное: esta casa. Самостоятельно — как местоимение: Quiero este.",
    ],
  },
];

export const demostrativosExamples: A1Example[] = [
  {
    es: "Este libro es interesante.",
    ru: "Эта книга интересная. (близко)",
  },
  {
    es: "Esta casa es muy bonita.",
    ru: "Этот дом очень красивый. (близко)",
  },
  {
    es: "Estos zapatos son nuevos.",
    ru: "Эти ботинки новые. (близко)",
  },
  {
    es: "Ese chico es mi vecino.",
    ru: "Тот парень — мой сосед. (среднее расстояние)",
  },
  {
    es: "Aquella casa es muy antigua.",
    ru: "Тот дом очень старый. (далеко)",
  },
  {
    es: "¿Qué es esto?",
    ru: "Что это? (нейтральная форма)",
  },
  {
    es: "Mi casa está aquí.",
    ru: "Мой дом здесь. (рядом)",
  },
  {
    es: "El parque está allí.",
    ru: "Парк вон там. (далеко)",
  },
  {
    es: "Prefiero estas flores.",
    ru: "Я предпочитаю эти цветы.",
  },
  {
    es: "Eso es importante.",
    ru: "Это важно. (нейтральная форма)",
  },
];

export const demostrativosExercises: A1Exercise[] = [
  {
    id: "de-ex1",
    question: "___ libro es interesante. (этот, близко)",
    correct: "este",
  },
  {
    id: "de-ex2",
    question: "___ casa es muy bonita. (этот, близко)",
    correct: "esta",
  },
  {
    id: "de-ex3",
    question: "___ zapatos son nuevos. (эти, близко)",
    correct: "estos",
  },
  {
    id: "de-ex4",
    question: "___ chico es mi vecino. (тот, средне)",
    correct: "ese",
  },
  {
    id: "de-ex5",
    question: "___ casa es muy antigua. (тот, далеко)",
    correct: "aquella",
  },
  {
    id: "de-ex6",
    question: "¿Qué es ___? (это, нейтральное)",
    correct: "esto",
  },
  {
    id: "de-ex7",
    question: "Mi casa está ___ . (здесь)",
    correct: "aquí",
  },
  {
    id: "de-ex8",
    question: "El parque está ___ . (вон там, далеко)",
    correct: "allí",
  },
  {
    id: "de-ex9",
    question: "Prefiero ___ flores. (эти)",
    correct: "estas",
  },
  {
    id: "de-ex10",
    question: "___ es importante. (то / это — нейтральное)",
    correct: "eso",
  },
];

export const demostrativosQuiz: A1QuizQuestion[] = [
  {
    id: "de-q1",
    question: "___ libro es interesante. (близко)",
    options: ["Este", "Ese", "Aquel"],
    correct: "Este",
    explanation: "este — предмет близко к говорящему.",
  },
  {
    id: "de-q2",
    question: "___ casa es muy bonita. (близко)",
    options: ["Este", "Esta", "Estos"],
    correct: "Esta",
    explanation: "casa — женский род, поэтому esta.",
  },
  {
    id: "de-q3",
    question: "___ zapatos son nuevos. (близко)",
    options: ["Estos", "Estas", "Este"],
    correct: "Estos",
    explanation: "zapatos — мужской род, множественное число: estos.",
  },
  {
    id: "de-q4",
    question: "___ chico es mi vecino. (среднее расстояние)",
    options: ["Este", "Ese", "Aquel"],
    correct: "Ese",
    explanation: "ese — предмет на среднем расстоянии.",
  },
  {
    id: "de-q5",
    question: "___ casa es muy antigua. (далеко)",
    options: ["Aquella", "Esta", "Esa"],
    correct: "Aquella",
    explanation: "aquel/aquella — предмет далеко.",
  },
  {
    id: "de-q6",
    question: "¿Qué es ___ ? (нейтральное «это»)",
    options: ["esto", "este", "esta"],
    correct: "esto",
    explanation: "esto — нейтральная форма для неизвестного предмета.",
  },
  {
    id: "de-q7",
    question: "Mi casa está ___ . (здесь)",
    options: ["aquí", "ahí", "allí"],
    correct: "aquí",
    explanation: "aquí — здесь, рядом с говорящим.",
  },
  {
    id: "de-q8",
    question: "El parque está ___ . (вон там)",
    options: ["aquí", "ahí", "allí"],
    correct: "allí",
    explanation: "allí/allá — далеко.",
  },
  {
    id: "de-q9",
    question: "Prefiero ___ flores. (эти)",
    options: ["estas", "estos", "estes"],
    correct: "estas",
    explanation: "flores — женский род, мн. ч.: estas.",
  },
  {
    id: "de-q10",
    question: "«Ahí» означает...",
    options: ["здесь", "там (рядом с тобой)", "вон там (далеко)"],
    correct: "там (рядом с тобой)",
    explanation: "ahí — средняя степень удалённости.",
  },
];
