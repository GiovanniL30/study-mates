import data from "@/data/data.json";
import { type CourseData, type Lesson, type Activity, type Question, type QuestionChoice } from "@/types/CourseData";
import course1 from "@/assets/course1.webp";
import course2 from "@/assets/course2.webp";
import course3 from "@/assets/course3.webp";
import course4 from "@/assets/course4.webp";
import course5 from "@/assets/course5.webp";
import course6 from "@/assets/course6.webp";

const courseImages = [course1, course2, course3, course4, course5, course6];
const courseData = data.courses;

const courses: CourseData[] = courseData.map((course, i) => {
  return {
    image: courseImages[i],
    categories: course.categories,
    title: course.title,
    teacher: course.teacher,
    courseId: course.courseId,

    lessons: course.lessons.map((lesson: Lesson) => ({
      lessonId: lesson.lessonId,
      lessonDescription: lesson.lessonDescription,
      lessonMaterial: lesson.lessonMaterial,

      activity: {
        activityId: lesson.activity.activityId,
        questions: lesson.activity.questions.map(
          (question: Question): Question => ({
            questionId: question.questionId,
            question: question.question,
            answer: question.answer,

            choices: question.choices.map(
              (choice: QuestionChoice): QuestionChoice => ({
                choiceId: choice.choiceId,
                choice: choice.choice,
              })
            ),
          })
        ),
      } satisfies Activity,
    })),
  };
});

export default courses;
