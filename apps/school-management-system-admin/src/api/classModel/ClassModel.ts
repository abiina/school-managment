import { Student } from "../student/Student";

export type ClassModel = {
  className: string | null;
  createdAt: Date;
  id: string;
  students?: Array<Student>;
  updatedAt: Date;
};
