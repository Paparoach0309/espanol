import { A1Exercise, A1Example, A1Rule } from "./types";

export const articulosRules: A1Rule[] = [
  {
    title: "Определённый артикль (the)",
    paragraphs: [
      "Определённый артикль используется, когда мы говорим о конкретном, известном предмете.",
    ],
    list: [
      "el — мужской род единственное число: el libro, el coche",
      "la — женский род единственное число: la casa, la mesa",
      "los — мужской род множественное число: los libros, los niños",
      "las — женский род множественное число: las casas, las niñas",
    ],
  },
  {
    title: "Неопределённый артикль (a / some)",
    paragraphs: [
      "Неопределённый артикль используется, когда мы говорим о чём-то в первый раз, о любом предмете из группы.",
    ],
    list: [
      "un — мужской род: un libro, un coche",
      "una — женский род: una casa, una manzana",
      "unos — мужской род мн.ч.: unos libros",
      "unas — женский род мн.ч.: unas casas",
    ],
  },
  {
    title: "Исключения: el с женскими словами на ударную a",
    paragraphs: [
      "Перед женскими словами, которые начинаются с ударной a-/ha-, используется артикль el (в единственном числе), чтобы не было слияния двух «а».",
    ],
    list: [
      "el agua (вода), el águila (орёл), el alma (душа), el aula (аудитория)",
      "НО: во множественном числе и с прилагательным — la: las aguas, el agua fría",
    ],
  },
  {
    title: "Другие исключения и правила",
    paragraphs: ["Запомните слова, где род отличается от окончания:"],
    list: [
      "el día, el mapa, el problema, el tema — мужской род",
      "la mano, la foto, la moto — женский род",
    ],
  },
  {
    title: "Слияния артиклей",
    paragraphs: ["Предлоги a и de сливаются с артиклем el:"],
    list: [
      "a + el = al: Voy al cine. (Я иду в кино.)",
      "de + el = del: El libro del profesor. (Книга учителя.)",
      "С la, los, las слияния нет: Voy a la escuela.",
    ],
  },
  {
    title: "Первое и повторное упоминание",
    paragraphs: [
      "Когда мы упоминаем предмет впервые — используем неопределённый артикль, а при повторном упоминании — определённый.",
    ],
    list: [
      "Tengo un perro. El perro es negro. (У меня есть собака. Собака чёрная.)",
    ],
  },
];

export const articulosExamples: A1Example[] = [
  {
    es: "Tengo un libro. El libro es interesante.",
    ru: "У меня есть книга. Книга интересная. (первое упоминание → un, повтор → el)",
  },
  {
    es: "Hay una casa en la montaña. La casa es grande.",
    ru: "В горах есть дом. Дом большой.",
  },
  {
    es: "Los niños juegan en el parque.",
    ru: "Дети играют в парке.",
  },
  {
    es: "El agua está fría.",
    ru: "Вода холодная. (el + ударная a)",
  },
  {
    es: "Voy al cine con mi hermano.",
    ru: "Я иду в кино с братом. (a + el = al)",
  },
];

export const articulosExercises: A1Exercise[] = [
  {
    id: "art-ex1",
    question: "Tengo ___ perro. (вставь артикль)",
    correct: "un",
  },
  {
    id: "art-ex2",
    question: "___ casa es blanca. (вставь артикль)",
    correct: "la",
  },
  {
    id: "art-ex3",
    question: "___ niños estudian. (вставь артикль)",
    correct: "los",
  },
  {
    id: "art-ex4",
    question: "Hay ___ manzana en la mesa. (вставь артикль)",
    correct: "una",
  },
  {
    id: "art-ex5",
    question: "___ agua está fría. (вставь артикль)",
    correct: "el",
  },
  {
    id: "art-ex6",
    question: "Voy ___ cine. (вставь артикль — слияние)",
    correct: "al",
  },
  {
    id: "art-ex7",
    question: "El libro es ___ profesor. (вставь артикль — слияние)",
    correct: "del",
  },
  {
    id: "art-ex8",
    question: "___ sol brilla. (вставь артикль)",
    correct: "el",
  },
  {
    id: "art-ex9",
    question: "Necesito ___ lápiz. (вставь артикль)",
    correct: "un",
  },
];