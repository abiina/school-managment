import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";

export type StudentUpdateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  enrolmentYear?: number | null;
  name?: string | null;
  phone?: string | null;
};
