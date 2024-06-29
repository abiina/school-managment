import { CourseGradeWhereInput } from "./CourseGradeWhereInput";
import { CourseGradeOrderByInput } from "./CourseGradeOrderByInput";

export type CourseGradeFindManyArgs = {
  where?: CourseGradeWhereInput;
  orderBy?: Array<CourseGradeOrderByInput>;
  skip?: number;
  take?: number;
};
