import { CourseGrade as TCourseGrade } from "../api/courseGrade/CourseGrade";

export const COURSEGRADE_TITLE_FIELD = "id";

export const CourseGradeTitle = (record: TCourseGrade): string => {
  return record.id?.toString() || String(record.id);
};
