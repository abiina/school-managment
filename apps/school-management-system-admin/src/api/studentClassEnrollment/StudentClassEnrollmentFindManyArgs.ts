import { StudentClassEnrollmentWhereInput } from "./StudentClassEnrollmentWhereInput";
import { StudentClassEnrollmentOrderByInput } from "./StudentClassEnrollmentOrderByInput";

export type StudentClassEnrollmentFindManyArgs = {
  where?: StudentClassEnrollmentWhereInput;
  orderBy?: Array<StudentClassEnrollmentOrderByInput>;
  skip?: number;
  take?: number;
};
