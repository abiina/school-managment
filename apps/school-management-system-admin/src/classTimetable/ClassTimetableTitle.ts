import { ClassTimetable as TClassTimetable } from "../api/classTimetable/ClassTimetable";

export const CLASSTIMETABLE_TITLE_FIELD = "id";

export const ClassTimetableTitle = (record: TClassTimetable): string => {
  return record.id?.toString() || String(record.id);
};
