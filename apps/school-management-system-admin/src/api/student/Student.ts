import { ClassModel } from "../classModel/ClassModel";

export type Student = {
  classField?: ClassModel | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  enrolmentYear: number | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
