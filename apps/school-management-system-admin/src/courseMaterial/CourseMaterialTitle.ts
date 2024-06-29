import { CourseMaterial as TCourseMaterial } from "../api/courseMaterial/CourseMaterial";

export const COURSEMATERIAL_TITLE_FIELD = "id";

export const CourseMaterialTitle = (record: TCourseMaterial): string => {
  return record.id?.toString() || String(record.id);
};
