import { Subject as TSubject } from "../api/subject/Subject";

export const SUBJECT_TITLE_FIELD = "subjectName";

export const SubjectTitle = (record: TSubject): string => {
  return record.subjectName?.toString() || String(record.id);
};
