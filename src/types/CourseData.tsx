export interface CourseData {
  courseId: string;
  image: string;
  categories: string[];
  title: string;
  teacher: string;
  lessons: Lesson[];
}

export interface Lesson {
  lessonId: string;
  lessonDescription: string;
  lessonMaterial: string;
  activity: Activity;
}

export interface Activity {
  activityId: string;
  questions: Question[];
}

export interface Question {
  questionId: string;
  question: string;
  answer: string;
  choices: QuestionChoice[];
}

export interface QuestionChoice {
  choiceId: string;
  choice: string;
}
