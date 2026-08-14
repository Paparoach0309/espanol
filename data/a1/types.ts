export interface A1Rule {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface A1Example {
  es: string;
  ru: string;
}

export interface A1Exercise {
  id: string;
  question: string;
  correct: string;
}

export interface A1QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}
