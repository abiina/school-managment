import { DigitalLibrary as TDigitalLibrary } from "../api/digitalLibrary/DigitalLibrary";

export const DIGITALLIBRARY_TITLE_FIELD = "id";

export const DigitalLibraryTitle = (record: TDigitalLibrary): string => {
  return record.id?.toString() || String(record.id);
};
