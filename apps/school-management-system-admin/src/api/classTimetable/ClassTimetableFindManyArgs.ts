import { ClassTimetableWhereInput } from "./ClassTimetableWhereInput";
import { ClassTimetableOrderByInput } from "./ClassTimetableOrderByInput";

export type ClassTimetableFindManyArgs = {
  where?: ClassTimetableWhereInput;
  orderBy?: Array<ClassTimetableOrderByInput>;
  skip?: number;
  take?: number;
};
