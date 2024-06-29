import { StudentClassEnrollment as TStudentClassEnrollment } from "../api/studentClassEnrollment/StudentClassEnrollment";

export const STUDENTCLASSENROLLMENT_TITLE_FIELD = "id";

export const StudentClassEnrollmentTitle = (
  record: TStudentClassEnrollment
): string => {
  return record.id?.toString() || String(record.id);
};
